
  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.botao_menu');
    const telaDesfoque = document.querySelector('.tela_desfoque');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
      telaDesfoque.style.display = 'block';
      menu.style.display = 'block';
    });

    telaDesfoque.addEventListener('click', () => {
      telaDesfoque.style.display = 'none';
      menu.style.display = 'none';
    });

    const continueButton = document.getElementById('botaoContinuar');

    continueButton.addEventListener('click', () => {
      telaDesfoque.style.display = 'none';
      menu.style.display = 'none';
    });
  });



