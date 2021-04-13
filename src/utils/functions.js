/**
 * Transforma uma data recebida
 * em "Modificado em DD/MM/YYYY"
 */
export function getModifiedAt({ date }) {

    const _date = new Date(date);

    if (String(_date).includes('Invalid Date')) {
        return '';
    }

    return `Modificado em ${((_date.getDate())) + "/" + ((_date.getMonth() + 1)) + "/" + _date.getFullYear()}`;
}

/**
 * A partir de data UTC,
 * passa data e horário
 * para callback.
 */
export function getDateTime(val, callback) {

    const dateObj = new Date(val);

    const date = new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(dateObj);
    const time = new Intl.DateTimeFormat("pt-BR", { timeStyle: "medium" }).format(dateObj);

    return callback(date, time);
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