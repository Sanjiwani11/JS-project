document.body.style.background = "hsl(120, 60%, 70%)";

document.getElementById("calculate").onclick = function() {
calculateCharge();
};



function calculateCharge() {
  var penaltyAmt = document.getElementById("penaltyamt").value;
  var punishmentType = document.getElementById("punishmentType").value;
  var numOfPeople = document.getElementById("peopleamt").value;

  if (penaltyAmt === "" || punishmentType == 0) {
    alert("Please enter values");
    return;
  }

  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (penaltyAmt * punishmentType) / numOfPeople;  

  total = Math.round(total * 100) / 100;
  
  total = total.toFixed(2);
  
  document.getElementById("totalCharge").style.display = "block";
  document.getElementById("charge").innerHTML = total;
}

document.getElementById("totalCharge").style.display = "none";
document.getElementById("each").style.display = "none";
