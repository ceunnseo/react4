//import { productActions } from "../reducers/productSlice";
//미들웨어 함수는 함수(dispatch, getState를 매개변수로)를 리턴한다.

/*
function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/ceunnseo/react4/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json();
        //api로부터 받은 데이터를 reducer로 보낸다.
        //reducer에 보낼 때는 type, payload를 매개변수로 하는 객체를 전달한다.
        //dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}})
        dispatch(productActions.getAllProducts({data})) //매개변수로 넘겨준 값 = payload에 자동으로 들어가게 됨
    }
} createAysnThunk 를 이용하여 만든다
*/



/*
function getProductDetail(id) {
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/ceunnseo/react4/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch(productActions.getAllProducts({data}))
    }
}
 */

/*
export const productAction={getProductDetail};*/
//여러 개의 함수를 productAction이라는 하나의 객체에 담아 리턴