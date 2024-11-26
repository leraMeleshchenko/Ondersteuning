"use strict";


const imagesArray = [
    './img/graphic-design1.jpg',
    './img/graphic-design2.jpg',
    './img/graphic-design3.jpg',
    './img/web-design1.jpg',
    './img/web-design3.jpg',
    './img/wordpress1.jpg',
    './img/wordpress6.jpg',
    './img/graphic-design5.jpg',
    './img/graphic-design12.jpg',
    './img/graphic-design9.jpg',
    './img/graphic-design6.jpg',
    './img/graphic-design7.jpg',
  ];

const className = [
    'graphic-design',
    'web-design',
    'landing-pages',
    'wordpress'
 ];



const loadMore = document.querySelector(".load_more")
 const ulPhotos = document.querySelector(".all_img_filter")
 const load = document.querySelector(".middle")
 let loadMoreClicks = 0;

loadMore.addEventListener("click", ()=>{
     load.style.display = "block"
     loadMore.style.display = "none"

    setTimeout(() => { 
        if (loadMoreClicks < 2) {
            for(let i = 0; i < imagesArray.length; i++){
                const li = document.createElement("li")
                li.classList.add("allPictures");
                const filterClass = getFilterClass(imagesArray[i]); 
                const div = document.createElement("div")
                div.classList.add("front")
                const newImg = document.createElement("img")
                newImg.classList.add("filterimg")
                newImg.src = imagesArray[i]
        
                const divBack = document.createElement("div");
                  divBack.classList.add("back")
                const greenLine = document.createElement("div")
                greenLine.classList.add("green_line")
                const imgSvg = document.createElement("img");
                imgSvg.src = "./img/icon svg.svg"
               imgSvg.style.margin = "0 auto"
                const oneP = document.createElement("p");
                oneP.innerText = "creative design";
                oneP.classList.add("creative_design_title")
                const twoP = document.createElement("p");
                twoP.innerText = className[i % className.length];
                twoP.classList.add('creative_design_text')
                 div.append(newImg)
                divBack.append(greenLine,imgSvg, oneP,twoP)
                li.append(div,divBack) 
                li.setAttribute("data-id", filterClass);
                ulPhotos.append(li)
                load.style.display = "none";
                loadMore.style.display = "block";
            }
            loadMoreClicks++
        }
    
        if (loadMoreClicks >= 2) {
            loadMore.style.display = 'none'; 
            load.style.display = "none";
          }    

      }, 2000);   
})

function getFilterClass(imageSrc) {
    for (let i = 0; i < imagesArray.length; i++) {
        if (imageSrc === imagesArray[i]) {
            return className[i % className.length];
        }
    }
}


const buttonAmazing = document.querySelectorAll(".btn_amazing_world")
buttonAmazing.forEach((item)=>{
    item.addEventListener("click", (event)=>{
        buttonAmazing.forEach((item)=>{
        item.classList.remove("active2")
       })
       item.classList.add("active2")

       const selectCategory = event.target.getAttribute('data-id');
       const gallery  = document.querySelector('.all_img_filter');
       const images  = gallery.querySelectorAll(".allPictures");
    

       images.forEach((img)=>{
           const imageCategory = img.getAttribute('data-id');
           if (selectCategory === 'all' || imageCategory === selectCategory){
               img.style.display = 'block';
           } else {
               img.style.display = 'none'; 
               
           }
         });
    })
})
