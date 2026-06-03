const titulo = document.querySelector('#titulo');
const subtitulo = document.querySelector('#subtitulo');
const btn = document.querySelector('#caixa');

titulo.textContent = 'Novo título!';
subtitulo.textContent = 'legal';
btn.innerHTML = 'nova <strong> louco</strong>';

console.log(titulo.textContent);
console.log(subtitulo.textContent);
console.log(btn.textContent);