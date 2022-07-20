import {GET_TABLE_LOAD, GET_TABLE_SUCCESS, DELETE_TABLE_ROW} from './types'

const initialState = {
    loading: false,
    data: []
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case GET_TABLE_LOAD:
            return{
                ...state,
                loading: true,
            }
        case GET_TABLE_SUCCESS:
            return{
                ...state,
                data: payload,
                loading: false
            }
        case DELETE_TABLE_ROW:
            return{
                ...state,
                data: [...state.data.filter(el => el.id !== action.payload)]
            }

        default: return state
    }
}