export const  GET_ALL ='GET_ALL'  //返回包含卡片集标题、问题及答案信息的所有卡片集。 
export const  GET_DECK ='GET_DECK' //传入单个id参数并返回与该id相关的卡片集。 
export const CREATE_DECK='CREATE_DECK' //传入单个id参数并将其添加至卡片集 
export const ADD_CARDS ='ADD_CARDS'  //传入两个参数，即标题和卡片，然后将卡片添加至带有相关标题的卡片集下的问题列表



export function getDecks (Deck) {
  return {
    type: GET_ALL,
    Deck,
  }
}

export function getDeck (id) {
  return {
    type: CREATE_DECK,
    id,
  }
} 

export function saveDeckTitle (id) {
  return {
    type: GET_DECK,
    id,
  }
} 

export function addCardToDeck(questions,id) {
  return {
    type: ADD_CARDS,
    id,
    questions
  }
}