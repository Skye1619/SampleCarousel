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

const buttonUpClick = () => {
  console.log(position);

  /*if (activeIndex > 1 && activeIndex < 7) {
    position += (containerHeight + 10) / 10
    if (activeIndex <= 2) {
      position = ((containerHeight + 10) / 10) * (activeIndex - 2)
    }
  }
  if (activeIndex > 1) {
    if (position > 0) {
      position = ((containerHeight + 10) / 10) * (activeIndex - 2)
    }
    console.log(position)
    carouselContainer.style.transform = `translateY(${position}px)`
  }*/

  if (activeIndex > 0) {
    activeContainer.classList.remove("active");
    activeIndex -= 1;
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  }

  if (activeIndex > 1 && activeIndex < 8) {
    position = ((containerHeight + 10) / 10) * (activeIndex - 2);
  }

  carouselContainer.style.transform = `translateY(${-position}px)`;
};

const buttonDownClick = () => {
  console.log(activeIndex);

  /*if (activeIndex < 7 && activeIndex > 1) {
    position -= (containerHeight + 10) / 10
    if (activeIndex >= 8) {
      position = ((containerHeight + 10) / 10) * (activeIndex - 2)
    }
  }
  if (activeIndex < 8) {
    if (position < -containerHeight) {
      position = ((containerHeight + 10) / 10) * (activeIndex - 2)
    }
    carouselContainer.style.transform = `translateY(${position}px)`
  }*/

  if (activeIndex < 9) {
    activeContainer.classList.remove("active");
    activeIndex += 1;
    activeContainer = carouselContainer.children[activeIndex];
    activeContainer.classList.add("active");
  }

  if (activeIndex > 1 && activeIndex < 8) {
    position = ((containerHeight + 10) / 10) * (activeIndex - 2);
  }

  console.log(position);
  carouselContainer.style.transform = `translateY(${-position}px)`;
};

const itemClick = (selected) => {
  for (let v = 0; v < cards.length; v++) {
    cards[v].classList.remove("active");
  }

  selected.classList.add("active");
  activeContainer = selected;
  activeIndex = Array.prototype.indexOf.call(
    carouselContainer.children,
    selected
  );
  console.log(activeIndex);

  if (activeIndex < 3) {
    position = ((containerHeight + 10) / 10) * 0;
    console.log("less3", position);
  } else if (activeIndex > 7) {
    position = ((containerHeight + 10) / 10) * 5;
    console.log("greater7", position);
  } else {
    console.log("nasa else");
    position = ((containerHeight + 10) / 10) * (activeIndex - 2);
  }
  carouselContainer.style.transform = `translateY(${-position}px)`;
};

let prevPosition = carouselContainer.scrollTop

const carouselScroll = (element) => {
  const currentPosition = element.scrollTop

  if (currentPosition > prevPosition) {
    
    if (currentPosition > (perContainerHeight * (activeIndex - 1)) - (perContainerHeight / 2)) {
      console.log("scroll up")
      activeContainer.classList.remove("active");
      activeIndex += 1;
      if (currentPosition < carouselMainContainerHeight - 10) {
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
      console.log("scroll down")
      activeContainer.classList.remove("active");
        activeIndex -= 1;
        if (currentPosition > 10) {
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