type TransactionType = '収入' | '支出'

type Transaction = {
    id: number
    amount: number
    type: TransactionType
    year: number
    month: number
    day: number
    user_id: number
    category_id: number
}

export { TransactionType, Transaction }
