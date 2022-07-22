import {createAction, props} from "@ngrx/store";
import {FilmsModel} from "@app-models/films-information.model";

export const storeFilmsInformation = createAction(
    '[Films Information] Store films information',
    props<{filmsInformation : FilmsModel[]}>()
)