import { Transaction } from "../models/transaction";

// このファイルは変更しないでください。

function getAmount(transaction: Transaction[]): number {
    // Transaction の配列の amount の合計を返す
    return transaction.reduce((acc, t) => acc + t.amount, 0);
}

function filterTransactionsByUser(transaction: Transaction[], user_id: number): Transaction[] {
    // Transaction の配列から user_id に一致する transaction の配列を返す
    return transaction.filter((t) => t.user_id === user_id);
}

function filterTransactionsByCategory(transaction: Transaction[], category_id: number): Transaction[] {
    // Transaction の配列から category_id に一致する transaction の配列を返す
    return transaction.filter((t) => t.category_id === category_id);
}

function filterTransactionByMonth(transaction: Transaction[], month: number): Transaction[] {
    // Transaction の配列から month に一致する transaction の配列を返す
    return transaction.filter((t) => t.month === month);
}

function filterTransactionByType(transaction: Transaction[], type: '収入' | '支出'): Transaction[] {
    // Transaction の配列から type に一致する transaction の配列を返す
    return transaction.filter((t) => t.type === type);
}

export { getAmount, filterTransactionsByUser, filterTransactionsByCategory, filterTransactionByMonth, filterTransactionByType }