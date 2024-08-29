const close = document.getElementById("close")
const sideMenu = document.getElementById("menu")
const open = document.getElementById("open")
const Zindex = document.querySelectorAll("z-index")
const left = document.getElementById("left")
const right = document.getElementById("right")
let  pic = document.querySelectorAll(".pic")
const slider = document.querySelector(".imges-container")





function Menu(){
    close.style.display = "none"
    open.addEventListener("click", ()=>{
    sideMenu.style.transform = "translateX(0px)"
     close.style.display = "block"
    document.querySelector("#main").classList.add("dark-color")
    document.querySelector(".navbar").classList.add("position")
  document.body.classList.add('class-fixed')
  document.querySelector('.section').classList.add('section-class')


    })

    close.addEventListener("click", ()=>{
          sideMenu.style.transform = "translateX(-330px)"
        close.style.display = "none"
        document.querySelector("#main").classList.remove("dark-color")
        document.body.classList.remove('class-fixed')
        document.querySelector('.section').classList.remove('section-class')
        document.querySelector(".navbar").classList.remove("position")
    }) 
 
   
}



// Function ///////////////////
left.addEventListener("click" , leftSlide)
right.addEventListener("click", rightSlide)
// Function ///////////////////

let index = 0;
pic[index].classList.add("active")

  function rightSlide(){
    
    pic[index].classList.remove('active')
    index = (index === pic.length - 1 ) ? 0 : index + 1;
    pic[index].classList.add("active")
    slider.style.transform = `translateX(-${index * 100}%) `
}

function leftSlide(){
  
  pic[index].classList.remove('active')
  index = (index === 0) ? pic.length - 1 : index -  1;
  pic[index].classList.add("active")
  slider.style.transform = `translateX(-${index * 100}%) `
}




const scrollAmount = 800; // Amount to scroll on each click
let scrollPosition = 0; // Track the current scroll position


function scrollImagesFunc(){


document.querySelector('.forward').addEventListener('click', function() {

    const images_container = document.querySelector('.books');
    const containerWidth = images_container.offsetWidth; // Width of the container
    const contentWidth = images_container.scrollWidth; // Total width of the content

    // Calculate the maximum scroll position to prevent scrolling past the end
    const maxScrollPosition = containerWidth - contentWidth;

    // Update scroll position
    scrollPosition -= scrollAmount;

    // Prevent scrolling beyond the end
    if (scrollPosition < maxScrollPosition) {
        scrollPosition = maxScrollPosition;
    }

    // Apply the new transform value
    images_container.style.transform = `translateX(${scrollPosition}px)`;
});

document.querySelector(".backward").addEventListener('click', function() {

  const Images_container = document.querySelector(".books");
  const containerWidth = Images_container.parentElement.offsetWidth; // Width of the scrollable area

  // Update scroll position
  scrollPosition += scrollAmount;

  // Calculate the minimum scroll position to prevent scrolling past the start
  const minScrollPosition = 0; // This is usually 0

  // Prevent scrolling beyond the start
  if (scrollPosition > minScrollPosition) {
      scrollPosition = minScrollPosition;
  }

  // Apply the new transform value
  Images_container.style.transform = `translateX(${scrollPosition}px)`;
});

}
scrollImagesFunc()
Menu();






let back = document.querySelector('.back-top')
back.addEventListener('click', scrollToTop);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

