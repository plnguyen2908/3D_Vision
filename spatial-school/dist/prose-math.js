// Typeset mathematical notation in the original tutorial prose as inline LaTeX.
const proseReplacements=[
['π/2',String.raw`\(\pi/2\)`],['0±1',String.raw`\(0\pm1\)`],['2±1',String.raw`\(2\pm1\)`],
['3×3',String.raw`\(3\times3\)`],['4×4',String.raw`\(4\times4\)`],['N×3',String.raw`\(N\times3\)`],['32³',String.raw`\(32^3\)`],['n³',String.raw`\(n^3\)`],['Rᵀ',String.raw`\(R^\top\)`],['N points',String.raw`\(N\) points`],
['p=(1,0,0)',String.raw`\(p=(1,0,0)\)`],['(1,1,0)',String.raw`\((1,1,0)\)`],['(0,2,0)',String.raw`\((0,2,0)\)`],['(1,0,0)',String.raw`\((1,0,0)\)`],
['X=1 m',String.raw`\(X=1\,\mathrm m\)`],['Z=4 m',String.raw`\(Z=4\,\mathrm m\)`],['f=500 px',String.raw`\(f=500\,\mathrm{px}\)`],['u−cₓ=125 px',String.raw`\(u-c_x=125\,\mathrm{px}\)`],
['f=700 px',String.raw`\(f=700\,\mathrm{px}\)`],['B=0.2 m',String.raw`\(B=0.2\,\mathrm m\)`],['d=35 px',String.raw`\(d=35\,\mathrm{px}\)`],['Z=4 m',String.raw`\(Z=4\,\mathrm m\)`],['±1 px',String.raw`\(\pm1\,\mathrm{px}\)`],['f(x)=‖x‖−r',String.raw`\(f(x)=\lVert x\rVert-r\)`],['90°',String.raw`\(90^\circ\)`],['+z',String.raw`\(+z\)`],['+1',String.raw`\(+1\)`]
];
function latexProse(s){let result=String(s);for(const [from,to] of proseReplacements)result=result.split(/(\\\([\s\S]*?\\\))/g).map(part=>part.startsWith('\\(')?part:part.split(from).join(to)).join('');return result;}
for(const l of lessons){l.body=l.body.map(latexProse);l.exercise=latexProse(l.exercise);l.question=latexProse(l.question);l.explain=latexProse(l.explain);if(l.solution)l.solution=latexProse(l.solution);}
