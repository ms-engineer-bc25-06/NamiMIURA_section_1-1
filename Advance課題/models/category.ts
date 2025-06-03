type CategoryType = '住居費' | '日用品' | '食費' | '交通費' | '交際費' | '趣味・娯楽' | '医療費' | '給与'

type Category = {
    id: number
    name: CategoryType
}

export { CategoryType, Category }
