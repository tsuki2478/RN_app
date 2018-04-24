import {AsyncStorage} from 'react-native'

export const ASYNC_STORAGE_KEY = 'TsuKi2478';

export function setDummyData() {

    const Deck = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                },
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }, {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },
            ]
        },
        cookies: {
            title: 'cookies',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },
            ]
        },
        TsuKi2471: {
            title: 'TsuKi2471',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that func' +
                        'tion was declared.'
                },
            ]
        },
    }
    
    AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(Deck))
    return Deck
}

export function formatCalendarResults(results) {
    return results === null
        ? setDummyData()
        : results;
}

//创建新card集
export function submitEntry(deck) {
    return AsyncStorage.mergeItem(ASYNC_STORAGE_KEY, JSON.stringify({
        [deck]: {
            "title": deck
        }
    }))
}

//添加问题
export function submitQuestions(questions,id) {
  return  AsyncStorage.getItem(ASYNC_STORAGE_KEY).then((results) =>{
        const data = JSON.parse(results)
        questions= data[id].questions.concat(questions)
        AsyncStorage. mergeItem(ASYNC_STORAGE_KEY, JSON.stringify({
            [id]: {
                questions
            }
        }))
    })
}
//查询
export function fetchAsyncStorage() {
    return AsyncStorage
        .getItem(ASYNC_STORAGE_KEY)
        .then(formatCalendarResults)
}

//删除
export function removeEntry(key) {
    return AsyncStorage
        .getItem(ASYNC_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(data))
        })
}