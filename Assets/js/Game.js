const items = document.querySelectorAll("ul li");
items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        document.querySelector("li.active").classList.remove("active");
        item.classList.add("active");
    });
});