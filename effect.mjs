// clase principal
class Effect {
  // constructor
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  // factoría que crea un nuevo efecto a partir del nombre
  static from(name) {
    return new Effect(
      name,
      positive_effect_tokens.some(token => name.includes(token)) ? 'beneficial' : 'harmful'
    );
  }
}

export default Effect;