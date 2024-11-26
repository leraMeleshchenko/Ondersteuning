"use strict";

const getBtm = document.querySelectorAll(".text_our_servise")
const getText = document.querySelectorAll(".img_text2")
const getImg = document.querySelectorAll(".img")
getBtm.forEach((item) =>{
item.addEventListener("click", () =>{
    let currentBtn = item
    let tabId = currentBtn.getAttribute("data-tab")
    let currentTab = document.querySelector(tabId)
    let imgIg = currentBtn.getAttribute("data-img")
    let currentImg = document.querySelector(imgIg)

    getBtm.forEach((item) =>{
        item.classList.remove("active")
    })

    getText.forEach((item) => {
        item.classList.remove("active")
    })
    getImg.forEach((item) =>{
        item.classList.remove("active")
    })

    currentBtn.classList.add("active")
    currentTab.classList.add("active")
    currentImg.classList.add("active")
})
})

