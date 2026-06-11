// Coordinate the nav dropdowns (EasyTourney menu + language picker).
// They are native <details> elements, which don't auto-close on their own.
// Progressive enhancement: the menus work without this script too.
document.addEventListener('DOMContentLoaded', function () {
    var menus = Array.prototype.slice.call(document.querySelectorAll('details.nav-app'));

    // Opening one menu closes any other open menu.
    menus.forEach(function (menu) {
        menu.addEventListener('toggle', function () {
            if (!menu.open) return;
            menus.forEach(function (other) {
                if (other !== menu) other.open = false;
            });
        });
    });

    // A click outside the menus closes them.
    document.addEventListener('click', function (event) {
        menus.forEach(function (menu) {
            if (menu.open && !menu.contains(event.target)) menu.open = false;
        });
    });

    // Escape closes any open menu.
    document.addEventListener('keydown', function (event) {
        if (event.key !== 'Escape') return;
        menus.forEach(function (menu) { menu.open = false; });
    });
});
