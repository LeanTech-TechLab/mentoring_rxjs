import {createAction, props} from "@ngrx/store";
import {CharacterInformationState} from "@app-models/character-information.model";

export const storeCharacterInformation = createAction(
    '[Character Information] Store character information',
    props<{characterInformation : CharacterInformationState}>()
)