import { Product } from "../Types/products";
import { Actions, SomeActions } from "../Types/store";
import { Screens } from "../Types/types";
import firebase from "../Utils/firebase";


export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};
export const saveproduct = async (products: Product): Promise <Actions> => {
        await firebase.saveProductInDB(products);
        return {
          action: SomeActions.SAVE_PRODUCT,
          payload: products,
         
  }
};

export const getProduct = async (): Promise <Actions> => {
  const products = await  firebase.getProductsFromDB();
  return {
    action: SomeActions.GET_PRODUCT,
    payload: products,
   
}
}

    
      
   