import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {RegisterRequestInterface} from '../../types/registerInterface.interface'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
)
