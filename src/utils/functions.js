/**
 * Transforma uma data recebida
 * em "Modificado em DD/MM/YYYY"
 */
export function getModifiedAt({ date }) {

    const _date = new Date(date);

    if (_date == 'Invalid Date') {
        return '';
    }

    return `Modificado em ${((_date.getDate())) + "/" + ((_date.getMonth() + 1)) + "/" + _date.getFullYear()}`;
}

/**
 * Se o valor da string passada
 * for maior que o limite fornecido,
 * a mesma será encurtada até chegar nesse limite
 * e terá "..." adicionados ao final.
 */
export function limitText({ value, charLimit }) {

    if (!!value) {
        return (value.length < charLimit) ? value : value.substr(0, charLimit) + "...";
    }

    return '';
}