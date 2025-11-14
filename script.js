function moveRandom(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveBtn = document.querySelector("#move-random");

// PC / Laptop
moveBtn.addEventListener("mouseenter", function(e) {
    moveRandom(e.target);
});

// Android / Mobile
moveBtn.addEventListener("touchstart", function(e) {
    moveRandom(e.target);
});
