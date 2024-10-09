// variables
const prositive_effect_tokens = [
  "Forty", "Resist", "Cure", "Restore", "Regenerate", "Invisibility",
];

export class Effect {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  // Método estático que crea un nuevo efecto a partir del nombre
  static from(name) {
    return new Effect(
      name,
      prositive_effect_tokens.some(token => name.includes(token) ? 'beneficial' : 'harmfull')
    );
  }

  // Método para generar el nombre de la poción o veneno según el tipo de efecto
  generatePotionOrPoison() {
    if (this.type === 'beneficial') {
      return `Potion of ${this.name}`;
    } else {
      return `Poison of ${this.name}`;
    }
  }

  // Getters
  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  // Setters
  setName(name) {
    this.name = name;
  }

  setType(type) {
    this.type = type;
  }
}

// Ejemplo de uso
const effect = Effect.from('Healing');
console.log(effect.generatePotionOrPoison());
