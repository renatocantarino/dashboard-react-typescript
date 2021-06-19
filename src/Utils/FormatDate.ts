const formatDate = (date: string): string => {
    return new Date(date)
        .toLocaleString('pt-br', { dateStyle: 'short' })
}


export default formatDate