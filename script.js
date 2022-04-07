const navOpen = document.getElementById('nav-open');
const navLinks = document.getElementById('nav-links');




//Hamburger Menu open on toggle
    if(navOpen){
      navOpen.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    };

   //Hamburger Menu should close when clicked outside
/* document.onclick = function(e){
  if(e.target.id !== 'nav-open' && e.target.id !== 'nav-links'){
    navLinks.classList.remove('active')
  }
}; */




/* window.addEventListener('click', (e) => {
  if(e.target.id !== "nav-open" && e.target.id !== "nav-links"){
    navLinks.classList.remove("active");
  }
});


    navOpen.addEventListener('click', () => {
      if(navOpen){
        navLinks.classList.toggle('active')
      }
    });
    */