// Vie Company: script compartilhado (menu mobile + formulário de contato)

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const especialidade = document.getElementById('especialidade').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    let text = `Olá, Vie! Meu nome é ${nome}.`;
    if (especialidade) text += ` Sou ${especialidade}.`;
    if (mensagem) text += ` ${mensagem}`;
    text += ` Meu WhatsApp para contato: ${whatsapp}.`;
    window.open(`https://wa.me/5521976656333?text=${encodeURIComponent(text)}`, '_blank');
  });
}
