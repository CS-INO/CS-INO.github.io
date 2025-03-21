function proceed() {
    window.location.href = "friendship.html";
}

function accept() {
    alert("YAY! 🎉 You just made my day! Besties forever! ❤️");
}

function moveButton() {
    let btn = document.getElementById("no-btn");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
