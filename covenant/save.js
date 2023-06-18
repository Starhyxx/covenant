document.addEventListener('DOMContentLoaded', function() {

    const personagensArmazenados = localStorage.getItem('personagem');
    console.log('Personagens armazenados:', personagensArmazenados);
    const personagens = JSON.parse(personagensArmazenados);
    console.log('Personagens parseados:', personagens);
  
    if (personagens && personagens.length > 0) {
      const primeiroPersonagem = personagens[0];
  
      document.getElementById('nomeSave').textContent = primeiroPersonagem.nome || '';
      document.getElementById('habilidadeSave').textContent = primeiroPersonagem.habilidade || '';
      document.getElementById('vitalidadeSave').textContent = primeiroPersonagem.vitalidade || '';
      document.getElementById('sanidadeSave').textContent = primeiroPersonagem.sanidade || '';
    } else {
      console.log('Nenhum personagem encontrado');
    }
  });
  