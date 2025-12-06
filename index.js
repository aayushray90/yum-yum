window.onload = function () {
    var u = localStorage.getItem("yumUser");
    if (u) {
        var btn = document.getElementById("topLoginBtn");
        btn.innerText = "Hello, " + u;
    }
}

function doLogin() {
    var u = document.getElementById("userInput").value;
    if (u == "") {
        alert("Enter name");
    } else {
        localStorage.setItem("yumUser", u);
        window.location.href = "#";
        document.getElementById("topLoginBtn").innerText = "Hello, " + u;
    }
}