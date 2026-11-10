function renderMath(root=document){
  root.querySelectorAll('[data-latex]').forEach(el=>{try{katex.render(el.dataset.latex,el,{displayMode:el.dataset.display!=='false',throwOnError:true,strict:'warn',trust:false,output:'htmlAndMathml'});}catch(error){el.textContent=el.dataset.latex;el.classList.add('math-error');console.error(error.message);}});
  renderMathInElement(root,{delimiters:[{left:'\\(',right:'\\)',display:false},{left:'\\[',right:'\\]',display:true}],throwOnError:false,trust:false,ignoredClasses:['notes','code-example']});
}
const mathBlock=latex=>`<div class="formula math-block" data-latex="${escapeHTML(latex)}"></div>`;
