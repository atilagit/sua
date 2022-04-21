export const formatNumber = (price: number) => {

    const params = {maximumFractionDigits: 2, minimumFractionDigits: 0};
    return new Intl.NumberFormat('pt-BR', params).format(price);
}

export const formatPrice = (price: number) => {

    const params = {style: 'currency', currency: 'BRL', maximumFractionDigits: 2, minimumFractionDigits: 2};
    return new Intl.NumberFormat('pt-BR', params).format(price);
}