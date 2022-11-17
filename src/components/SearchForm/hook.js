import { useReducer } from "react"

const ACTIONS = {
    UPDATE_KEYWORD: 'update-keyword',
    UPDATE_RATING: 'update-rating'
}

const ACTIONS_REDUCERS = {
    [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
        ...state,
        keyword: action.payload,
        times: state.times + 1
    }),
    [ACTIONS.UPDATE_RATING]: (state, action) => ({
        ...state,
        rating: action.payload
    })
}

const REDUCER = (state, action) => {
    const action_reducer = ACTIONS_REDUCERS[action.type]
    return action_reducer ? action_reducer(state, action) : state
}

export default function useForm ({ initialKeyword = '', initialRating = 'g' }) {
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        times: 0
    })

    const [ keyword, rating, times ] = state

    return {
        keyword,
        rating,
        times,
        updateKeyword: keyword => 
            dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }), //keyword === evt.target.value
        updateRating: rating => 
            dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }) //rating === evt.target.value
    }
}