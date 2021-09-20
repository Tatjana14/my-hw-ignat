const initState = {
    isLoading: false
}

export type InitialStateType = typeof initState

export const loadingReducer = (state = initState, action: LoadingACType): InitialStateType => { // fix any
    switch (action.type) {
        case "CHANGE_LOADING_STATE": {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingACType => ({type: "CHANGE_LOADING_STATE", isLoading})// fix any

type LoadingACType = {
    type: "CHANGE_LOADING_STATE"
    isLoading: boolean
}