// Função para criar alertbox ao enviar formulário
function show_alert() {
    alert("E-mail enviado com sucesso");
}

// Função para rolar até a div correspondente ao link e observar em qual seção esta ativo 
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.secao');
    const menuLinks = document.querySelectorAll('.link-nav-pages a');

    function scrollToSection(event) {
        const targetId = event.target.id.replace('link', 'div');
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        menuLinks.forEach(link => link.classList.remove('active'));

        event.target.classList.add('active');
    }


    menuLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = document.querySelector(`.link-nav-pages a#link${entry.target.id.replace('div', '')}`);
            if (entry.isIntersecting) {
                menuLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});