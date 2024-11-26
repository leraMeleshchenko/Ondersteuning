"use strict";
const smallImg = document.querySelector(".smallImg");
const img = smallImg.querySelectorAll("img");
const text = document.querySelectorAll(".text_name_people");
const people = document.querySelectorAll(".bigimg");
const info = document.querySelectorAll(".text_what_people");
const array = Array.from(img);

let startIndex = 0;

function changimg(index){
  array.forEach((ar,i)=>{
    if(i === index){ 
      startIndex = index;
      ar.classList.add("smallimgpeople")
    text[i].classList.add("active");
    people[i].classList.add("active");
info[i].classList.add("active")
    }else{
      ar.classList.remove("smallimgpeople")
    text[i].classList.remove("active");
    people[i].classList.remove("active");
info[i].classList.remove("active")
    }
  })

}


array.forEach((ar,i)=>{
  ar.addEventListener("click", ()=>{
    changimg(i)
  })
})


const nextButton = document.querySelector(".next-button");

nextButton.addEventListener("click", ()=>{
  startIndex = (startIndex + 1) % array.length; 
  changimg(startIndex)
})

const prevButton =document.querySelector(".prev-button");

prevButton.addEventListener("click", ()=>{
  startIndex = (startIndex - 1 + array.length) % array.length;
  changimg(startIndex) 
})

changimg(startIndex) 

