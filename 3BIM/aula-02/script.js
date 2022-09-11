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

// funções para exercício 5
function limparCampos() {
    // Limpa os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    // document.getElementById("outResposta").textContent = "";
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
    }

function calcularPeso() {
    var altura = document.getElementById("inAltura").value;

    if (document.getElementById("rbMasculino").checked == true) {
        var pesoIdeal = (altura * altura) * 22;
        console.log(pesoIdeal/10000);
    } else {
        var pesoIdeal = (altura * altura) * 21;
        console.log(pesoIdeal/10000);
    }
}    
    var btLimpar = document.getElementById("btLimpar");
    btLimpar.addEventListener("click", limparCampos);

    var btCalcular = document.getElementById("btCalcular");
    btCalcular.addEventListener("click", calcularPeso);