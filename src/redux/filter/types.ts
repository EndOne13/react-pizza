export enum SortPropertyEnum {
    RATING = 'rating',
    TITLE = 'title',
    PRICE = 'price'
}

export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum
}

export interface FilterSliceState {
    searchValue: string;
    activeIndex: number;
    currentPage: number;
    sort: Sort;
}
