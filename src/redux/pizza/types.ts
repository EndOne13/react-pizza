export type FetchPizzasArgs = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
}

export type Pizza = {
    id: string;
    title: string;
    type: string;
    size: number;
    price: number;
    count: number;
    imageUrl: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface PizzaSliceState {
    items: Pizza[];
    status: Status; // 'loading' | 'success' | 'error'
}