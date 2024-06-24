"use strict";
const largeImg = document.querySelector("#largeImg");
const thumbs = document.querySelector("#thumbs");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    const targetLink = e.target.closest("a");
    if (targetLink) largeImg.setAttribute("src", targetLink.getAttribute("href"));
});

//# sourceMappingURL=index.f75de5e1.js.map
