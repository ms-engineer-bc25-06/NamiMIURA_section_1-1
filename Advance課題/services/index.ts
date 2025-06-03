
import { Transaction } from '../models/transaction';
import { 
    getAmount,
    filterTransactionsByUser,
    filterTransactionsByCategory,
    filterTransactionByMonth,
    filterTransactionByType
} from './util';

// util.ts の関数を利用して、下記の関数を実装してください。
// 必要な関数は都度実装してください。

function getUserExpense(transaction: Transaction[], user_id: number, month: number): number {
    // 任意のユーザの特定の月の支出の合計を返す。
    //ユーザーを絞り込み
    const filteredByUser = filterTransactionsByUser(transaction, user_id);
    //月で絞り込み
    const filteredByMonth = filterTransactionByMonth(filteredByUser, month);
    //支出だけに絞り込み
    const expenses = filterTransactionByType(filteredByMonth, '支出');
    //支出だして
    return getAmount(expenses); 
}

function calcDifference(transaction: Transaction[], user_id: number, month: number): number {
    // 任意のユーザの特定の月の支出と収入の差額を返す。
    //ユーザーの絞り込み
    const filteredByUser = filterTransactionsByUser(transaction, user_id);
    //月で絞り込み
    const filteredByMonth = filterTransactionByMonth(filteredByUser, month);
    //収入だけに絞り込み
    const income = filterTransactionByType(filteredByMonth, '収入');
    //支出だけに絞り込み
    const expense = filterTransactionByType(filteredByMonth, '支出');
    //収入の金額を合計する
    const totalIncome = getAmount(income);
    //支出の金額を合計する
    const totalExpense = getAmount(expense);
    //収入ー支出
    return totalIncome - totalExpense;
}

function getTransactionsByCategory(transaction: Transaction[], user_id: number, month: number, category_id: number): Transaction[] {
    // 任意のユーザの特定の月、特定のカテゴリの支出のリストを返す。
    //ユーザーの絞り込み
    const filteredByUser = filterTransactionsByUser(transaction, user_id);
    //月を絞り込む
    const filteredByMonth = filterTransactionByMonth(filteredByUser, month);
    //特定のカテゴリに絞り込む
    const filteredByCategory = filterTransactionsByCategory(filteredByMonth, category_id);
    //さらに支出だけに絞って返してもらう！
    return filterTransactionByType(filteredByCategory, '支出');
}

export { getUserExpense, calcDifference, getTransactionsByCategory as getAmountByCategory }
