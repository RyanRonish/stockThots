// js/app.js
// Assuming you're not using a module bundler,
// include these script files in index.html in the proper order

document.addEventListener("DOMContentLoaded", () => {
    // Create instances
    const navbar = new Navbar();
    const header = new Header();
    const footer = new Footer();
  
    // Inject the components into designated placeholders
    document.getElementById('navbar').innerHTML = navbar.render();
    document.getElementById('header').innerHTML = header.render();
    document.getElementById('footer').innerHTML = footer.render();
  
    // Additional logic: for instance, loading Adsense scripts if needed
  });