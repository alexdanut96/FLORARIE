const CURRENCY_FORMATTER = new Intl.NumberFormat("ro-RO", {
    currency: "lei",
    style: "currency",
})

export function formatCurrency(number) {
    return CURRENCY_FORMATTER.format(number).toLocaleLowerCase()
}

export function newPrice(oldPrice, discount) {
    return (oldPrice - (oldPrice * discount / 100))
}