import {createSlice} from "@reduxjs/toolkit";


interface ProductState {
    id: number,
    name: string,
    price: number,
    type: string,
    brand: string,
    img: string,
    discount: number
}

const initialState: ProductState = {
    id: 1,
    name: "SILENO / Силен",
    price: 38000,
    type: "Духи",
    brand: "AGATHO",
    img: "agatho1.png",
    discount: 30,
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
})


