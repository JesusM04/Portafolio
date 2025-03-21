document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavButtons = document.querySelectorAll('.mobile-menu .nav-button');
    const navButtons = document.querySelectorAll('.nav-buttons .nav-button');
    const sections = {
        'btnInicio': 'ventanaInicio',
        'btnNosotros': 'ventanaNosotros',
        'btnProyectos': 'ventanaProyectos',
        'btnFooter': 'ventanaFooter',
        'btnInicioMobile': 'ventanaInicio',
        'btnNosotrosMobile': 'ventanaNosotros',
        'btnProyectosMobile': 'ventanaProyectos',
        'btnFooterMobile': 'ventanaFooter'
    };

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
        mobileMenu.classList.remove('active');
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            scrollToSection(sections[button.id]);
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    mobileNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            scrollToSection(sections[button.id]);
        });
    });
});