
import { User } from '../models/user'
import { Transaction } from '../models/transaction'
import { Category } from '../models/category'

const users: User[] = [
    { id: 1, name: 'Ariel' },
    { id: 2, name: 'Belle' },
]

const categories: Category[] = [
    { id: 1, name: '住居費' },
    { id: 2, name: '日用品' },
    { id: 3, name: '食費' },
    { id: 4, name: '交通費' },
    { id: 5, name: '交際費' },
    { id: 6, name: '趣味・娯楽' },
    { id: 7, name: '医療費' },
    { id: 8, name: '給与' },
]

const transactions: Transaction[] = [
    { id: 1, amount: 75000, type: '支出', year: 2024, month: 1, day: 30, user_id: 1, category_id: 1 },
    { id: 2, amount: 400000, type: '収入', year: 2024, month: 1, day: 25, user_id: 1, category_id: 8 },
    { id: 3, amount: 1500, type: '支出', year: 2024, month: 1, day: 3, user_id: 1, category_id: 3 },
    { id: 4, amount: 2000, type: '支出', year: 2024, month: 1, day: 4, user_id: 1, category_id: 3 },
    { id: 5, amount: 500, type: '支出', year: 2024, month: 1, day: 5, user_id: 1, category_id: 3 },
    { id: 6, amount: 6000, type: '支出', year: 2024, month: 1, day: 6, user_id: 1, category_id: 6 },
    { id: 7, amount: 3500, type: '支出', year: 2024, month: 1, day: 14, user_id: 1, category_id: 7 },
    { id: 8, amount: 280000, type: '収入', year: 2024, month: 1, day: 8, user_id: 2, category_id: 8 },
    { id: 9, amount: 9000, type: '支出', year: 2024, month: 1, day: 9, user_id: 2, category_id: 1 },
    { id: 10, amount: 10000, type: '支出', year: 2024, month: 1, day: 10, user_id: 2, category_id: 2 },
    { id: 11, amount: 11000, type: '支出', year: 2024, month: 1, day: 11, user_id: 2, category_id: 3 },
    { id: 12, amount: 75000, type: '支出', year: 2024, month: 2, day: 30, user_id: 1, category_id: 1 },
]

export { users, categories, transactions }