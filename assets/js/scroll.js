const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2000,
    delay: 200,
    reset: true,
});

sr.reveal('.container,.about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input .footer', { interval: 200 });
sr.reveal('.contact__input', { interval: 200, reset: false });
