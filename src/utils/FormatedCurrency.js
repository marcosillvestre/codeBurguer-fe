/* eslint-disable prettier/prettier */
const formatedCurrency = value => {
    return Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

export default formatedCurrency
