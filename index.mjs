// imports
import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";

// funcion principal
const execute = async () => {
  try {
    const data = await getData;

    // creamos los ingredientes
    const ingredients = Ingredients.load(data);
  } catch (error) {
    console.error("Error al crear ingredientes");
    
  }
}

execute();