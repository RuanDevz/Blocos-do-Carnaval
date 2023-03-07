lista.addEventListener('click', () => {
  console.log('lista foi clicada!');
  // Verificar se o estilo de fundo do botão "Lista" é definido inline
  if (lista.style.backgroundColor !== '') {
    // Copiar as propriedades de estilo do botão "Lista" para o botão "Mapa"
    mapa.style.backgroundColor = lista.style.backgroundColor;
    mapa.style.color = lista.style.color;
  }
});
