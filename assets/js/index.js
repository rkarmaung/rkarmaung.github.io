var projectPicContainer = document.querySelectorAll(".project3PicContainer");
var projectFooterBtn = document.querySelectorAll(" .projectFooterBtn ");

//Hotel Website - Toe Pwar Hotel
var counter4 = 0;
var projectContainer4 = document.querySelector(".projectContainer4");
projectContainer4.addEventListener("click", function(e){
  if(e.target != projectFooterBtn[0] && e.target != projectFooterBtn[1]){
    if (counter4==0){
      projectPicContainer[0].style.transform = "perspective(600px) rotateY(0deg)"
      counter4++;
    } else {
      projectPicContainer[0].style.transform = "perspective(600px) rotateY(-90deg)"
      counter4--;
    }
  }
});

//ecommerce sg-mobile
var counter3 = 0;
var projectContainer3 = document.querySelector(".projectContainer3");
projectContainer3.addEventListener("click", function(e){
  if(e.target != projectFooterBtn[0] && e.target != projectFooterBtn[1]){
    if (counter3==0){
      projectPicContainer[1].style.transform = "perspective(600px) rotateY(0deg)"
      counter3++;
    } else {
      projectPicContainer[1].style.transform = "perspective(600px) rotateY(-90deg)"
      counter3--;
    }
  }
});

//Hotel business
var counter2 = 0;
var projectContainer2 = document.querySelector(".projectContainer2");
projectContainer2.addEventListener("click", function(e){
  if(e.target != projectFooterBtn[2] && e.target != projectFooterBtn[3]){
    if (counter2==0){
      projectPicContainer[2].style.transform = "perspective(600px) rotateY(0deg)"
      counter2++;
    } else {
      projectPicContainer[2].style.transform = "perspective(600px) rotateY(-90deg)"
      counter2--;
    }
  }
});

//business website
var counter1 = 0;
var projectContainer1 = document.querySelector(".projectContainer1");
projectContainer1.addEventListener("click", function(e){
  if(e.target != projectFooterBtn[4] && e.target != projectFooterBtn[5]){
    if (counter1==0){
      projectPicContainer[3].style.transform = "perspective(600px) rotateY(0deg)"
      counter1++;
    } else {
      projectPicContainer[3].style.transform = "perspective(600px) rotateY(-90deg)"
      counter1--;
    }
  }
});

//burger
var burgerContainer = document.querySelector(".burgerContainer")
var navContent = document.querySelector(".navContent")
var navCounter = 0;
burgerContainer.addEventListener("click", function(){
  if (navCounter == 0){
    navContent.style.left = "0";
    navCounter++;
  } else {
    navContent.style.left = "-200%";
    navCounter--;
  }
});

navContent.addEventListener("click", function(){
  navContent.style.left = "-200%";
  navCounter=0;
});

var lesserThan700 = window.matchMedia("(max-width: 700px)");
  if (lesserThan700.matches){
    burgerContainer.removeEventListener("click", myFunction);
  }
