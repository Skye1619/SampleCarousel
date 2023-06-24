const mainContainer = document.querySelector(".mainContainer");
const carouselContainer = document.querySelector(".carouselContainer");
const card = document.querySelector(".card");
const cards = document.querySelectorAll(".card");
const carouselMainContainer = document.querySelector(".carouselMainContainer");

const cardHeight = card.offsetHeight;
const containerHeight = carouselContainer.offsetHeight;
const carouselMainContainerHeight = (containerHeight + 10) / 2;
const perContainerHeight = (containerHeight + 10) / 10;
carouselMainContainer.style.height = carouselMainContainerHeight + "px";
let position = 0;
let activeIndex = 2;
let activeContainer = carouselContainer.children[activeIndex];
activeContainer.classList.add("active");
let prevPosition = carouselContainer.scrollTop

const buttonUpClick = () => {

  if (activeIndex > 7) {
    activeContainer.classList.remove("active");
    activeIndex -= 1;
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  } else {
    carouselMainContainer.scrollTop -= perContainerHeight;
  }
  
  if (carouselMainContainer.scrollTop < (perContainerHeight * 2) && activeIndex > 0) {
    activeContainer.classList.remove("active");
    activeIndex -= 1;
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  }
};

const buttonDownClick = () => {
 
  
  if (activeIndex < 2) {
    activeContainer.classList.remove("active");
    activeIndex += 1;
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  } else {
    carouselMainContainer.scrollTop += perContainerHeight;
  }
  if (carouselMainContainer.scrollTop > (carouselMainContainerHeight - (perContainerHeight * 2)) && activeIndex < 9) {
    console.log('down')
    activeContainer.classList.remove("active");
    activeIndex += 1;
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  }
};

const itemClick = (selected) => {
  activeContainer.classList.remove("active");
  activeIndex = Array.prototype.indexOf.call(carouselContainer.children, selected);
  if (activeIndex >= 1) {
    carouselMainContainer.scrollTop = perContainerHeight * (activeIndex - 2);
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  } else if (activeIndex <= 8) {
    carouselMainContainer.scrollTop = perContainerHeight * (activeIndex - 7);
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  } else {
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  }
  
};



const carouselScroll = (element) => {
  const currentPosition = element.scrollTop

  if (currentPosition > prevPosition) {
    
    if (currentPosition > (perContainerHeight * (activeIndex - 1)) - (perContainerHeight / 2)) {
      console.log("scroll up", currentPosition);
      activeContainer.classList.remove("active");
      activeIndex += 1;
      if (currentPosition < carouselMainContainerHeight - 50) {
        activeContainer = carouselContainer.children[activeIndex];
        activeContainer.classList.add("active");
      } else {
        activeContainer = carouselContainer.children[activeIndex];
        activeContainer.classList.add("active");
      }
    }
  }
  if (currentPosition < prevPosition) {
      if (currentPosition < (perContainerHeight * (activeIndex - 2)) - (perContainerHeight / 2)) {
        console.log("scroll down", currentPosition, (perContainerHeight * (activeIndex - 2)) - (perContainerHeight / 2));
      
        if (currentPosition < carouselMainContainerHeight) {
          activeContainer.classList.remove("active");
          activeIndex -= 1;
          activeContainer = carouselContainer.children[activeIndex];
          activeContainer.classList.add("active");
        } else {
          activeContainer = carouselContainer.children[activeIndex];
        activeContainer.classList.add("active");
        }
        
      }
    }
  
  
  prevPosition = currentPosition
}