function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("responsive")) {
        navLinks.classList.remove("responsive");
    } else {
        navLinks.classList.add("responsive");
    }
}
