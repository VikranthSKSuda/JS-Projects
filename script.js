let userName = window.prompt("What Is Your Name Before You Enter");
document.getElementById("userName").textContent = userName;

const submit = document.getElementById("submit"); 

submit.onclick = function() {
    let Age = Number(document.getElementById("Age_Input").value);

    if (Age < 18) {
        document.getElementById("Age_Reply").textContent = "AYO YOU AIN'T ALLOWED ON THE HUB";
    } else {
        document.getElementById("Age_Reply").textContent = "Ye We Chillin You can enter";
        window.location.href = "https://github.com";
    }
};
