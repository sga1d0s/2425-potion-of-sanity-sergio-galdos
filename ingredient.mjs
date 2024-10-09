// importar clase 'Effect'
import Effect from "./effect.mjs";

// clase principal
class Ingredient {
  constructor(name, effects, value, weight ) {
    this.name = name;
    this.effects = effects;
    this.value = value;
    this.weight = weight;
  }

  // factoría static que crea un ingrediente a través de un objeto json de la DB
  static from ({name, effects, value, weight}){
    return new Ingredient(
      name,
      effects.map(effect => Effect.from(effect)),
      value,
      weight
    )
  }

}
export default Ingredient;