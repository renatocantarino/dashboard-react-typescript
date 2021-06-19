const Meses = [
    {
        value: 1, label: 'Janeiro'
    },
    {
        value: 2, label: 'Feveiro'
    },
    {
        value: 3, label: 'Março'
    },
    {
        value: 4, label: 'Abril'
    },
    {
        value: 5, label: 'Maio'
    },
    {
        value: 6, label: 'Junho'
    },
    {
        value: 7, label: 'Julho'
    },
    {
        value: 8, label: 'Agosto'
    },
    {
        value: 9, label: 'Setembro'
    },
    {
        value: 10, label: 'Outubro'
    },
    {
        value: 11, label: 'Novemento'
    },
    {
        value: 12, label: 'Dezembro'
    },

];


const Anos = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' }
]

const GetCurrentMonth = (): string => {
    return String(new Date().getMonth() + 1);

}

const GetCurrentYear = (): string => {
    return String(new Date().getFullYear());

}




export { Meses, Anos, GetCurrentMonth, GetCurrentYear }