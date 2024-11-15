import {createSlice} from "@reduxjs/toolkit";

interface Notes {
    id: number,
    name: string,
}

interface ProductInfo {
    id: number,
    title: string,
    description: string,
}

interface Description {
    id: number,
    description: string
}


interface ProductState {
    id: number,
    name: string,
    price: number,
    type: string,
    brand: string,
    img: string,
    discount: number,
    description: Array<Description>,
    notes: Array<Notes>,
    productInfo: Array<ProductInfo>
}

const initialState: ProductState = {
    id: 1,
    name: "SILENO / Силен",
    price: 38000,
    type: "Духи",
    brand: "AGATHO",
    img: ".././agatho1.png",
    description: [
        {
            id: 1,
            description: "По садам и цитрусовым рощам Помпеи Силен бродит и поет свои песни. Легким шагом, с едкой улыбкой он шевелит листья апельсиновых деревьев. Нежные цветы опадают и излучают свежие зеленые ноты."
        },
        {
            id: 2,
            description: "Это места «отиума» и медитации, где пьяный старый Силен передает своей музыкой и песнями янтарное звучание своих древних путешествий по Средиземноморью, отражая образы восточных земель нотами сычуаньского перца, иланг-иланга и ностальгического морского аккорда."
        },
        {id: 3, description: "Миф питается природой, а природа хранит миф в лесу ароматом цветов и фруктов."},
        {
            id: 4,
            description: "Силен — мудрец, презирающий земные блага, считающийся провидцем, открывающим будущее только по принуждению. Из его рассказов появляются выброшенные на берег леса, покрытые водорослями и солоноватой водой по утрам. Фантастические жизненные истории, сотканные из звуков, запахов и вкусов беззаботности, вина с ароматом ценных пород дерева и кедрового дерева."
        },

    ],
    discount: 30,
    notes: [
        {id: 1, name: "драгоценное дерево"},
        {id: 2, name: "иланг-иланг"},
        {id: 3, name: "кедр"},
        {id: 4, name: "морские ноты"},
        {id: 5, name: "перец Сычуань"},
        {id: 6, name: "фрукты"},
        {id: 7, name: "цветочные ноты"},
    ],
    productInfo: [
        {id: 1, title: "Страна", description: "Италия"},
        {id: 2, title: "Объем", description: "100 мл"},
        {id: 3, title: "Аромат", description: "Для всех"},
    ]

}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
})


