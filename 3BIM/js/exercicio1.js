
function addPrice(amount) {
    this.price = amount;
}

function multa(date, price) {
    this.date = date;
    this.price = 0;
    this.addPrice = addPrice;
}

function getMulta() {
	var date = new Date(document.getElementById("date").value);
    var price = document.getElementById("price").value;
}

function calcularMulta() {
    var mesAtual = new Date().getMonth();

     if ( mesAtual - date.getMonth() <= 3) {
      price = price * 0.2;
  }
}

  
var calcular = document.getElementById("calcular");

calcular.addEventListener("click", calcularMulta);
