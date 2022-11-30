import { useReducer } from "react"

const ACTIONS = {
    CHANGE_KEYWORD: 'chance_keyword',
    CHANGE_RATING: 'chance_rating'
}

const ACTIONS_REDUCERS = {
    [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
        ...state,
        keyword: action.payload,
        times: state.times + 1
    }),
    [ACTIONS.CHANGE_RATING]: (state, action) => ({
        ...state,
        rating: action.payload
    })
}

const reducer = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type]
    return actionReducer ? actionReducer(state, action) : state
}

export default function useForm ({ initialKeyword = '', initialRating = 'g' } = {}) {
    const [{ keyword, rating }, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating
      });
    
      return {
        changeKeyword: ({ keyword }) =>
          dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
        changeRating: ({ rating }) =>
          dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating }),
        keyword,
        rating
      };
}