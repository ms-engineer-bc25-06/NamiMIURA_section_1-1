import { users, categories, transactions } from './data';
import { getUserExpense, calcDifference, getAmountByCategory } from './services';
import { User } from './models/user';
import { Category } from './models/category';

const Ariel: User | undefined = users.find(user => user.name === 'Ariel');
const January = 1;
const food: Category | undefined = categories.find(category => category.name === '食費');

if (Ariel) {
    // 1.「Ariel」の「1月」の支出の合計額をコンソールに出力してください。
    console.log(getUserExpense(transactions, Ariel.id, January));
    
    // 2. 「Ariel」の「1月」の支出と収入の差額をコンソールに出力してください。
    console.log(calcDifference(transactions, Ariel.id, January));
    
    // 3. 「Ariel」の「1月」の食費のリストをコンソールに出力してください。
    if (food) {
        // 出力形式: 「YYYY年MM月dd日: XX円」
        const tmp_transactions = getAmountByCategory(transactions, Ariel.id, January, food.id)
        tmp_transactions.forEach(transaction => {
            console.log(`${transaction.year}年${transaction.month}月${transaction.day}日: ${transaction.amount}円`);
        });
    }
}
