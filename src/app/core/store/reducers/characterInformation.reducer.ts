
import {CharacterInformationState} from "@app-models/character-information.model";
import {Action, createReducer, on} from "@ngrx/store";
import {storeCharacterInformation} from "@app-core/store/actions/character-information.action";


const initialState: CharacterInformationState = {
    name: '',
    hairColor: '',
    created: '',
    films: []
}

const _characterInformationReducer = createReducer(initialState,
    on(storeCharacterInformation, (state, {characterInformation}) => ({...state, ...characterInformation})))

export function characterInformationReducer(state: CharacterInformationState, action: Action) {
    return _characterInformationReducer(state,  action)
}