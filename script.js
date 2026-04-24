const characterName = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

const enemyDefense = 20;
const spellCost = 30;
const isStunned = false;

function calculateDamage(attack, defense) {
  const damage = attack - defense;

  if (damage < 0) {
    return 0;
  }

  return damage;
}

const isAlive = (health) => {
  return health > 0;
};

const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

function getPresentation(name, characterClass, level) {
  return `${name} - ${characterClass} (Nivel ${level})`;
}

console.log("Presentation:", getPresentation(characterName, characterClass, level));
console.log("Damage:", calculateDamage(attack, enemyDefense));
console.log("Is alive:", isAlive(health));
console.log("Can cast spell:", canCastSpell(mana, spellCost, isStunned));