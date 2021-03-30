var table = document.querySelector('table');

table.addEventListener('dblclick', function (evento) {

    var alvoEvento = evento.target;
    var paiElemento = alvoEvento.parentNode;
    paiElemento.remove();

});