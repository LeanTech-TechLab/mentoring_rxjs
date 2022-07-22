import {CharacterInformationState} from "@app-models/character-information.model";
import {FilmsInformationState} from "@app-models/films-information.model";

export interface AppState {
    characterInformation: CharacterInformationState;
    filmsInformation: FilmsInformationState
}