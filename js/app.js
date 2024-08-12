function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida de ingressos.');
        return;
    }

    switch (tipo) {
        case 'pista':
            comprarIngresso('qtd-pista', qtd, 'pista');
            break;
        case 'superior':
            comprarIngresso('qtd-superior', qtd, 'superior');
            break;
        case 'inferior':
            comprarIngresso('qtd-inferior', qtd, 'inferior');
            break;
        default:
            alert('Tipo de ingresso inválido.');
    }
}

function comprarIngresso(idElemento, qtd, tipoIngresso) {
    let qtdDisponivel = parseInt(document.getElementById(idElemento).textContent);
    
    if (qtd > qtdDisponivel) {
        alert(`Quantidade indisponível para tipo ${tipoIngresso}.`);
    } else {
        document.getElementById(idElemento).textContent = qtdDisponivel - qtd;
        alert('Compra realizada com sucesso!');
    }
}