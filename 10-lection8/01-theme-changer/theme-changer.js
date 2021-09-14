const changer = document.getElementById('theme-changer');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});

document.getElementById('theme-changer-mobail').addEventListener('change', function() {
  html.toggleAttribute('data-theme-dark');
})
