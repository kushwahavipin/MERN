function calculate() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value) / 100;
    var years = parseFloat(document.getElementById('years').value);
  
    var amount = principal * Math.pow((1 + rate), years);
    var interest = amount - principal;
  
    document.getElementById('result').innerHTML = "After " + years + " years, at an interest rate of " + rate*100 + "%, the total amount will be $" + amount.toFixed(2) + " with an interest of $" + interest.toFixed(2) + ".";
  }