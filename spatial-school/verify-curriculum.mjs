import {readFileSync,writeFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
process.chdir(fileURLToPath(new URL('.',import.meta.url)));
const require=createRequire(import.meta.url),katex=require('./dist/vendor/katex/katex.min.js');
const context=vm.createContext({console});
for(const p of ['content.js','courses.js','modules.js','deep-lessons.js','experiments.js','prose-math.js'])vm.runInContext(readFileSync('dist/'+p,'utf8'),context);
const {lessons,resources,projects,modules,courses,deepLessons,lessonCode}=vm.runInContext('({lessons,resources,projects,modules,courses,deepLessons,lessonCode})',context);
assert.equal(lessons.length,112);assert.equal(modules.length,11);assert.equal(new Set(lessons.map(l=>l.id)).size,112);
const visited=new Set(),active=new Set();
function visit(id){assert(!active.has(id),'Cycle at '+id);if(visited.has(id))return;const l=lessons.find(l=>l.id===id);assert(l,'Unknown prerequisite '+id);active.add(id);l.deps.forEach(visit);active.delete(id);visited.add(id);}
let mathCount=0;
function validateMath(s){katex.renderToString(s,{throwOnError:true,strict:'error',trust:false});mathCount++;}
for(const l of lessons){visit(l.id);assert(l.options[l.answer]);assert(l.body.length>=2);assert(l.exercise&&l.goal);assert(l.fullReading?.url,'Missing full reading: '+l.id);new URL(l.fullReading.url);validateMath(l.formula);for(const s of l.sources)assert(resources.some(r=>r.id===s));}
const allIds=modules.flatMap(m=>m.lessonIds);assert.equal(new Set(allIds).size,112);assert.equal(allIds.length,112);
for(const d of Object.values(deepLessons)){assert(d.sections.length>=2&&d.worked.length>=2&&d.practice.length);for(const s of d.sections)if(s.math)validateMath(s.math);}
function validateInline(value){if(typeof value==='string'){for(const m of value.matchAll(/\\\(([\s\S]*?)\\\)/g))validateMath(m[1]);}else if(Array.isArray(value))value.forEach(validateInline);else if(value&&typeof value==='object')Object.values(value).forEach(validateInline);}
validateInline(deepLessons);
const done=new Set(),stack=new Set();function visitModule(id){assert(!stack.has(id),'Module cycle');if(done.has(id))return;const m=modules.find(m=>m.id===id);assert(m);stack.add(id);m.deps.forEach(visitModule);stack.delete(id);done.add(id);}modules.forEach(m=>visitModule(m.id));
for(const p of projects)for(const id of p.lessons)assert(lessons.some(l=>l.id===id));
assert.equal(700*.2/35,4);let T=1,total=0;for(const alpha of [.35,.5,.6,1]){total+=T*alpha;T*=1-alpha;}assert(Math.abs(total-1)<1e-12);
const graph='# 3D Vision · Module Learning Graph\n\nAn independent study sequence. Arrows mean prerequisite → module. Sources reviewed November 10, 2026.\n\n```mermaid\nflowchart TD\n'+modules.map(m=>`  M${m.id}["${m.id} · ${m.title}"]`).join('\n')+'\n'+modules.flatMap(m=>m.deps.map(d=>`  M${d} --> M${m.id}`)).join('\n')+'\n```\n\n'+modules.map(m=>`## ${m.id} · ${m.title}\n\nMain course: ${m.course}\n\nPrerequisites: ${m.deps.join(', ')||'none'}\n\n${m.outcome}\n\n`+m.lessonIds.map((id,i)=>`${i+1}. ${lessons.find(l=>l.id===id).title}`).join('\n')+'\n\nExit project: '+m.project).join('\n\n')+'\n\n## Source collections\n\n'+courses.map(c=>`- [${c.name}](${c.url})`).join('\n');
writeFileSync('LEARNING_GRAPH.md',graph);
if(process.argv.includes('--export-experiments'))writeFileSync('experiments-qa.json',JSON.stringify(lessonCode));
console.log(`Verified ${modules.length} modules, ${lessons.length} lessons, ${Object.keys(deepLessons).length} expanded tutorials, ${mathCount} LaTeX expressions, valid full readings, acyclic module/lesson graphs, and lab math. Generated LEARNING_GRAPH.md.`);
