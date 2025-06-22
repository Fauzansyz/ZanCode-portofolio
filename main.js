AOS.init({
  once:true
})

const navbar = document.getElementById("nav")

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const container = document.getElementById("container")

let showing = false;

menuBtn.addEventListener("click", () => {
  if (!showing) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("slide-down-enter");
    setTimeout(() => {
      mobileMenu.classList.remove("slide-down-enter");
      mobileMenu.classList.add("slide-down-enter-active");
      navbar.classList.add('bg-transparent'); // Warna awal
      mobileMenu.classList.add("bg-gray-900")
      mobileMenu.classList.remove("bg-transparent")
      navbar.classList.add("bg-gray-900")
      navbar.classList.remove("bg-transparent")
      
    }, 10);
  } else {
    mobileMenu.classList.remove("slide-down-enter-active");
    mobileMenu.classList.add("slide-down-exit");
    setTimeout(() => {
      mobileMenu.classList.remove("slide-down-exit");
      mobileMenu.classList.add("slide-down-exit-active");
      
    }, 10);
    
    setTimeout(() => {
      mobileMenu.classList.remove("slide-down-exit-active");
      mobileMenu.classList.add("hidden");
    }, 200);
  }
  showing = !showing;
  
})

window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      mobileMenu.classList.add("bg-gray-600")
      mobileMenu.classList.remove("bg-gray-900")
      navbar.classList.add('bg-gray-600'); // Warna setelah scroll
      navbar.classList.add("shadow-md")
      navbar.classList.remove('bg-transparent'); // Hapus warna awal
    } else {
      navbar.classList.add('bg-transparent'); // Warna awal
      mobileMenu.classList.add("bg-transparent")
      mobileMenu.classList.remove("bg-gray-600")
      navbar.classList.remove("shadow-md")
      navbar.classList.remove("bg-gray-900")
      navbar.classList.remove('bg-gray-600'); // Hapus warna scroll
    }
  })