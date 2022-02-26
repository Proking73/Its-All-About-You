const options = document.querySelectorAll(".options");

options.forEach(element => {
    element.addEventListener('click', () => {
        element.style.opacity = "0";
    });
});