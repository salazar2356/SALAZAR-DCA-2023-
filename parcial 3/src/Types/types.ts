export enum Screens{
    HOME = "HOME",
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    ADD = "ADD",
}

export type AppState ={
    Screens:{
        HOME: "HOME",
        REGISTER: "REGISTER",
        LOGIN: "LOGIN",
        ADD: "ADD"
    }
    screens: Screens[];

    product: {
        name: string,
        price: string
    },
    products: AppState[]
}