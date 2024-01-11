// Lightbox JavaScript
const gallery = document.querySelectorAll('[data-lightbox="project"]');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');

gallery.forEach(image => {
    image.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le lien de redirection par défaut
        const link = image.getAttribute('href');
        const altText = image.querySelector('img').getAttribute('alt');
        lightbox.innerHTML = `<img src="${link}" alt="${altText}">`;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

let MenuBurgerButton = document.getElementById("menu-burger-button");
let MenuBurger = document.getElementById("menu-burger");
let MenuBurgerClose = document.getElementById("menu-burger-close");
let OpenBurger = document.getElementById("open-burger");
let Link = document.querySelectorAll(".link")

MenuBurgerButton.addEventListener("click", function () {
    if (MenuBurger.style.display === "none" || MenuBurger.style.display === "") {
        MenuBurger.style.display = "block";
    } else {
        MenuBurger.style.display = "none";
    }
});

MenuBurgerClose.addEventListener("click", function () {
    MenuBurger.style.display = "none";
});

Link.forEach(element => {
    element.addEventListener("click", function () {
        MenuBurger.style.display = "none";
    })
});

window.addEventListener("resize", function () {
    if (window.screen > "770px") {
        MenuBurger.style.display = "none";
    }
})
