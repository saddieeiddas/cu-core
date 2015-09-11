/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Player from './Player';
import Inventory from './Inventory';
import Equip from './Equip';
import BanesBoons from './BanesBoons';

class Character extends Player {
    
  inventory: Inventory;
  banesboons: BanesBoons;
  equip: Equip;
    
  //Primary
  strength: number;
  agility: number;
  endurance: number;
  will: number;
  resonance: number;
  dexterity: number;
  vitality: number;
  attunement: number;
  faith: number;
  eyesight: number;
    
  //Secondary
  hearing: number;
  clarity: number;
  mass: number;
  presence: number;
  affinity: number;
    
  //Derived
  maxMoveSpeed: number;
  vision: number;
  detection: number;
  carryCapacity: number;
  maxPanic: number;
  panixDecay: number;
  maxHp: number;
  healthRegeneration: number;
  maxStamina: number;
  staminaRegeneration: number;
  

  constructor(character = <Character>{}) {
    super(character)
      this.inventory = character.inventory || new Inventory;
      this.equip = character.equip || new Equip;
      this.banesboons = character.banesboons || new BanesBoons;
      
     
      this.strength = character.strength || 0;
      this.agility = character.agility || 0;
      this.endurance = character.endurance || 0;
      this.will = character.will || 0;
      this.resonance = character.resonance || 0;
      this.dexterity = character.dexterity || 0;
      this.vitality = character.vitality || 0;
      this.attunement = character.attunement || 0;
      this.faith = character.faith || 0;
      this.eyesight = character.eyesight || 0;
      
      this.hearing = character.hearing || 0;
      this.clarity = character.clarity || 0;
      this.mass = character.mass || 0;
      this.presence = character.presence || 0;
      this.affinity = character.affinity || 0;
      
      this.maxMoveSpeed = character.maxMoveSpeed || 0;
      this.vision = character.vision || 0;
      this.detection = character.detection || 0;
      this.carryCapacity = character.carryCapacity || 0;
      this.maxPanic = character.maxPanic || 0;
      this.panixDecay = character.panixDecay || 0;
      this.maxHp = character.maxHp || 0;
      this.healthRegeneration = character.healthRegeneration || 0;
      this.maxStamina = character.maxStamina || 0;
      this.staminaRegeneration = character.staminaRegeneration || 0;

  }

  static create() {
    let a = new Character();
    return a;
  }

}

export default Character;
