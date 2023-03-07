const lista = document.getElementById('lista');
const mapa = document.getElementById('mapa');

lista.addEventListener('click', btn1);
mapa.addEventListener('click', btn2);

lista.style.transition = 'background-color 0.3s ease, color 0.3s ease';
mapa.style.transition = 'background-color 0.3s ease, color 0.3s ease';

function btn1() {
  lista.style.background = '#6246ea';
  lista.style.color = '#FFF';
  mapa.style.background = '#FFF';
  mapa.style.color = '#6246ea';
}

function btn2() {
  lista.style.background = '#FFF';
  lista.style.color = '#6246ea';
  mapa.style.background = '#6246ea';
  mapa.style.color = '#FFF';
}