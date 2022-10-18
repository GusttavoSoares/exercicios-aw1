# exercicios-aw1
Repositório para os exercícios da matéria de aplicações web 1

18/10/2022

jQuery 

é uma biblioteca que ajuda a diminuir linhas de código javascript ou usar o CDN, evitando fazer download

Para funcionar precisa fazer download e importar no <script></script>

sintaxe: $(seletor).ação()
$("cabecalho").hide();
$('div:first-child');

Para mostrar uma lista

$("#menu-departamentos li").each(function (index, item) {
  alert(item,text));
});

var pessoas = ["João", "José", "Maria"];

$.each(pessoas, function(index, item) {
  alert(item,text));
});

utilizar ".ready" quando deseja fazer alguma função que deve ser executada depois que o DOM carregar
$(document).ready(function() {});

forma compacta: $(function() {});

focus - quando clica no campo
blur - quando sai do campo

Para javascript*

modificar o dom também é uma boa solução
utilizar addEventListener, pois pode ligar uma funçao a varios eventos, ou n funcoes a 1 evento

Para Jquery
utilizar o on ou :

$("p").on...
mouseenter: function()

função append, after, before, prepend, remove...
