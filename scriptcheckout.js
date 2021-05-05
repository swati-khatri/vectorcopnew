<!-- Created By CodingNepal -->
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");

const submitBtn = document.querySelector(".submit");


nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});


// prevBtnThird.addEventListener("click", function(event){
//   event.preventDefault();
//   slidePage.style.marginLeft = "-25%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });
// prevBtnFourth.addEventListener("click", function(event){
//   event.preventDefault();
//   slidePage.style.marginLeft = "-50%";
//   bullet[current - 2].classList.remove("active");
//   progressCheck[current - 2].classList.remove("active");
//   progressText[current - 2].classList.remove("active");
//   current -= 1;
// });
