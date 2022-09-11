var exibeMensagem = function() {
    var mensagemForaDoIf = 'Caelum';
    if(true) {
    var mensagemDentroDoIf = 'Alura';
    console.log(mensagemDentroDoIf)// Alura ;
    }

    console.log(mensagemForaDoIf); // Caelum
    console.log(mensagemDentroDoIf); // Alura
}

// função para exercício 4

function calcularPreco() {
    var quilo = document.getElementById("quilo").value;
    var consumo = document.getElementById("consumo").value;
    var precoTotal = (quilo * consumo) / 1000;
    console.log(precoTotal);
}