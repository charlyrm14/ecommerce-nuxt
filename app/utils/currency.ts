export const formatCurrency = (price: string): string => {
    return Number(price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}