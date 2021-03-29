function fomataData (data) {

    date = data.split('-');
    novaData = date[2] + '/' + date[1] + '/' + date[0];

    return novaData;

}

function validaCampos (dados) {

    var cont = 0;
    var campoNome = document.querySelector('#tarefa');
    var campoDesc = document.querySelector('#descricao');
    var campoPrazo = document.querySelector('#prazo');

    if (dados.nome == '') {
        campoNome.classList.add('campo-vazio');
        cont++;
    }

    if (dados.desc == '') {
        campoDesc.classList.add('campo-vazio');
        cont++;
    }

    if (dados.prazo == 'undefined/undefined/') {
        campoPrazo.classList.add('campo-vazio');
        cont++;
    }

    return cont;

}

function limpaCampos (form) {

    var spanErro = document.querySelector('#mensagem-erro');
    spanErro.textContent = '';

    form.tarefa.value = '';
    form.tarefa.classList.remove('campo-vazio');
    
    form.descricao.value = '';
    form.descricao.classList.remove('campo-vazio');
    
    form.prazo.value = '';
    form.prazo.classList.remove('campo-vazio');

}
