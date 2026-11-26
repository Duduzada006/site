// Menu mobile
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => nav.classList.toggle('open'));

// Fecha o menu ao clicar em uma opção
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Formulário demonstrativo: não envia e-mail, apenas mostra confirmação
const form = document.querySelector('#contactForm');
const formMessage = document.querySelector('#formMessage');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Mensagem preenchida! Para receber mensagens de verdade, será necessário conectar o formulário a um serviço.';
  form.reset();
});


// Reprodutor do hino do Vasco
const anthem = document.querySelector('#vascoAnthem');
const playButton = document.querySelector('#anthemPlay');
const pauseButton = document.querySelector('#anthemPause');
const anthemStatus = document.querySelector('#anthemStatus');

playButton.addEventListener('click', async () => {
  try {
    await anthem.play();
    anthemStatus.textContent = 'Hino em reprodução.';
    playButton.disabled = true;
    pauseButton.disabled = false;
  } catch (error) {
    anthemStatus.textContent = 'Não foi possível reproduzir o áudio. Confira o arquivo hino-vasco.mp3.';
  }
});

pauseButton.addEventListener('click', () => {
  anthem.pause();
  anthemStatus.textContent = 'Hino pausado.';
  playButton.disabled = false;
  pauseButton.disabled = true;
});

anthem.addEventListener('ended', () => {
  anthemStatus.textContent = 'Hino finalizado.';
  playButton.disabled = false;
  pauseButton.disabled = true;
});
