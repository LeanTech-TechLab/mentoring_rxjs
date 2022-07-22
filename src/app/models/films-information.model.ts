export interface FilmsInformationState {
    films: FilmsModel[]
}

export interface FilmsModel {
    created: string;
    director: string;
    producer: string;
    release_date: string;
    title: string;
}