import { product } from "../Types/productsint";
import { Screens } from "../Types/types";


export const navigate = (screen: Screens) => {
  return {
    type: "NAVIGATE",
    payload: screen,
  };
};

export const saveproduct = (products:product) => {
  return{
    action:"",
    payload:products 

  }
}