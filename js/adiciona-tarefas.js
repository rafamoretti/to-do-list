var btnEnviar = document.querySelector('.btn-enviar');

btnEnviar.addEventListener('click', function (evento) {

    evento.preventDefault();

    var form = document.querySelector('.tarefa-form');
    var dados = recebeDados(form);

    var tr = montaTr(dados);
    var tbody = document.querySelector('tbody');

    tbody.appendChild(tr);

});

function recebeDados (camposForm) {

    tarefa = {
        nome: camposForm.tarefa.value,
        desc: camposForm.descricao.value,
        prazo: fomataData(camposForm.prazo.value),
    }

    return tarefa;

}

function montaTr (dado) {

    var tr = document.createElement('tr');

    tr.appendChild(montaTd(dado.nome));
    tr.appendChild(montaTd(dado.desc));
    tr.appendChild(montaTd(dado.prazo));

    return tr;

}

function montaTd (dado) {

    var td = document.createElement('td');
    td.textContent = dado;

    return td;
}