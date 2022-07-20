import { DELETE_TABLE_ROW, GET_TABLE_LOAD, GET_TABLE_SUCCESS } from "./types"

export const getTable = () => {
    return dispatch => {
        dispatch({
            type: GET_TABLE_LOAD
        })

        setTimeout(() => {
            dispatch({
                type: GET_TABLE_SUCCESS,
                payload: [
                    {
                      id: 1,
                      data: ['Вася', '22', 'муж', '4', 'программист']
                    },
                    {
                      id: 2,
                      data: ['Маша', '25', 'жен', '5', 'SMM']
                    },
                    {
                      id: 3,
                      data: ['Петя', '30', 'муж', '5', 'программист']
                    },
                    {
                      id: 4,
                      data: ['Саша', '40', 'муж', '4', 'тестировщик']
                    },
                    {
                      id: 5,
                      data: ['Катя', '22', 'жен', '5', 'программист']
                    },
                ]
            })
        }, 2000)
    }
}

export const deleteTableRow = id => {
    return dispatch => {
        dispatch({
            type: DELETE_TABLE_ROW,
            payload: id
        })
    }
}