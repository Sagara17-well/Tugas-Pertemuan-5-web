
document.addEventListener("DOMContentLoaded", function() {

    const tombolTema = document.getElementById("themeButton");

    tombolTema.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            tombolTema.textContent = "Light Mode";
        } else {
            tombolTema.textContent = "Dark Mode";
        }
    });

    const menu = document.querySelectorAll("nav a");

    menu.forEach(function(link) {
        link.addEventListener("click", function() {
            menu.forEach(function(item) {
                item.classList.remove("active");
            });

            link.classList.add("active");
        });
    });

    const proyek = document.querySelectorAll(".project-card");

    proyek.forEach(function(item) {
        item.addEventListener("click", function() {
            item.classList.toggle("selected");
        });
    });

    const tombolKontak = document.getElementById("contactButton");

    tombolKontak.addEventListener("click", function() {
        window.location.href = "mailto:putrabaadi17@gmail.com";
    });

    const tombolAtas = document.getElementById("topButton");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            tombolAtas.style.display = "block";
        } else {
            tombolAtas.style.display = "none";
        }
    });

    tombolAtas.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
