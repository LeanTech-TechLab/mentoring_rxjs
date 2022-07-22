import {ActionReducerMap} from "@ngrx/store";
import {characterInformationReducer} from "@app-core/store/reducers/characterInformation.reducer";
import {AppState} from "@app-models/app-state.model";
import {filmsInformationReducer} from "@app-core/store/reducers/films-information.reducer";

export const reducers: ActionReducerMap<AppState> = {
    characterInformation: characterInformationReducer,
    filmsInformation: filmsInformationReducer
}