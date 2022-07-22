
import {FilmsInformationState} from "@app-models/films-information.model";
import {Action, createReducer, on} from "@ngrx/store";
import {storeFilmsInformation} from "@app-core/store/actions/films-information.action";

const initialState: FilmsInformationState = {
    films: []
}

const _filmsInformationReducer = createReducer(initialState,
    on(storeFilmsInformation, (state, {filmsInformation}) => ({...state, films: filmsInformation})))

export function filmsInformationReducer(state: FilmsInformationState, action: Action) {
    return _filmsInformationReducer(state,  action)
}