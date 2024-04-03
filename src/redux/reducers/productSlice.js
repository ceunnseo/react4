import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
let initialState = {
    productList : [],
    selectedItem : null,
    isLoading : false,
    error : null
}
/*
function productReducer(state = initialState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList : payload.data};
            //객체를 복사하되, productList는 payload.data값으로 설정한다.
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {...state, selectedItem : payload.data};
        default:
            return {...state};
    }
}
export default productReducer*/

export const fetchProducts = createAsyncThunk(
    'product/fetchAll', 
    async (searchQuery, thunkApi)=>{
        try {
            let url = `https://my-json-server.typicode.com/ceunnseo/react4/products?q=${searchQuery}`
            let response = await fetch(url)
            return await response.json(); //promise 리턴
        } catch(error) {
            thunkApi.rejectWithValue(error.message);
        }
})

export const fetchDetailProducts = createAsyncThunk(
    'product/fetchDetail', 
    async (id, thunkApi)=>{
        try {
            let url = `https://my-json-server.typicode.com/ceunnseo/react4/products/${id}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log("fetchDetail", data)
            return await response.json(); //promise 리턴
        } catch(error) {
            console.log("fetchDetail!!!!!!")
            thunkApi.rejectWithValue(error.message);
        }
})

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {  //reducers : 동기적으로 자신의 state를 바꾸는 경우
       getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action) {
           state.selectedItem = action.payload.data;
        },
    },
    extraReducers:(builder)=>{ //외부로부터 state가 바뀌는 경우, 비동기
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        }) //데이터가 오는 중
        .addCase(fetchProducts.fulfilled, (state, action)=> {
            state.isLoading = false
            state.productList = action.payload;
        }) //데이터를 성공적으로 받음
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        });
        builder.addCase(fetchDetailProducts.pending, (state) => {
            state.isLoading = true
        }) //데이터가 오는 중
        .addCase(fetchDetailProducts.fulfilled, (state, action)=> {
            state.isLoading = false
            state.selectedItem = action.payload;
        }) //데이터를 성공적으로 받음
        .addCase(fetchDetailProducts.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export const productActions = productSlice.actions
export default productSlice.reducer //reducer를 export