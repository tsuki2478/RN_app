import {GET_ALL, GET_DECK, CREATE_DECK, ADD_CARDS} from '../actions'

function Decks(state = {}, action) {
    const {Deck,id,questions} =action
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                 ...Deck
            }
        case GET_DECK:
            return {
                ...state,
                ...Deck
            }
        case CREATE_DECK:
            return {
                ...state,
                    [id]:{
                   "title":id
                }
            }
        case ADD_CARDS:
            return {
                ...state,
                [id]:{
                    "title":state[id].title,
                    "questions":state[id].questions.concat(questions)
                }
            }
        default:
            return state
    }
}

export default Decks