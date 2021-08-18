import {UserType} from "../HW8";


export const homeWorkReducer = (state: Array<UserType>, action: AllACTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = state
            if (action.payload === 'up'){
                newState = [...state.sort( (a,b) => {
                    if (a.name > b.name) return 1
                    else if (a.name < b.name) return -1
                    else return 0
                })]
            } else if(action.payload === 'down'){
                newState = [...state.sort( (a,b) => {
                    if (a.name < b.name) return 1
                    else if (a.name > b.name) return -1
                    else return 0
                })]
            }
            return newState
        }
        case 'check': {
            if(action.payload){
                return state.filter( u => u.age >= action.payload)
            }
            return state
        }
        default: return state
    }
}
type AllACTypes = SortACType | CheckACType
type SortACType = ReturnType<typeof sortAC>
type CheckACType = ReturnType<typeof checkAC>


export const sortAC = (payload: string) => {
    return {type: 'sort', payload} as const
}

export const checkAC = (payload: number) => {
    return {type: 'check', payload} as const
}
