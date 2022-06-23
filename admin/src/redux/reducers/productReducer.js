

export const productReducer = (state={ products:[] }, action) =>{
    switch (action.type) {
        case 'ALL_PRODUCTS':
            return{
                products: action.payload
                
            }
        case 'ADD_PRODUCT':
            return{
                products: action.payload
            }
        case 'UPDATE_PRODUCT':
            return{
                ...state.products,
                message: action.payload
            }
        case 'DELETE_PRODUCT':
            return{
            products: action.payload
        }    
        default:
            return state
    }
}

