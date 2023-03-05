let money = "money"; 

 if(!localStorage.getItem(money)) {
    localStorage.setItem(money, 60000); 
 }
 

setInterval(function() {
    if (money != localStorage.getItem(money)) {
    location.reload();
    }
}, 10000);

document.getElementById("money-counter").innerHTML = '$' + localStorage.getItem(money);
