export const formatNumber = (price: number) => {

    const params = {maximumFractionDigits: 2, minimumFractionDigits: 0};
    return new Intl.NumberFormat('pt-BR', params).format(price);
}

export const formatPrice = (price: number) => {

    const params = {style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2};
    return new Intl.NumberFormat('pt-BR', params).format(price);
}

export const formatCpfCnpj = (texto: string) => {
    texto = texto.replace(/(\.|\/|-)/g,"");
    if (texto.length <= 11) {
        return texto.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
    } else {
        return texto.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5");
    }
}

export const formatDate = (texto: string) => {
     return texto.substring(8,10) + "/" + texto.substring(5,7) + "/" + texto.substring(0,4);
}

export const formatCEP = (texto: string) => {
    return texto.substring(0,5) + "-" + texto.substring(5);
}