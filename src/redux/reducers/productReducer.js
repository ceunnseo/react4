let initialState = {
    productList : [],
    selectedItem : null,
}
function productReducer(state = initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList : payload.data};
            //객첼를 복사하되, productList는 payload.data값으로 설정한다.
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {...state, selectedItem : payload.data};
        default:
            return {...state};
    }
}
export default productReducer