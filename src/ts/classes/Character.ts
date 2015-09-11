/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Player from './Player';
import Inventory from './Inventory';
import BanesBoons from './BanesBoons';

class Character extends Player {
    
  inventory: Inventory;
  banesboons: BanesBoons;
    
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
  max_move_speed: number;
  vision: number;
  detection: number;
  carry_capacity: number;
  max_panix: number;
  panix_decay: number;
  max_hp: number;
  health_regeneration: number;
  max_stamina: number;
  stamina_regeneration: number;
  

  constructor(character = <Character>{}) {
    super(character)
      this.inventory = character.inventory || new Inventory;
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
      
      this.max_move_speed = character.max_move_speed || 0;
      this.vision = character.vision || 0;
      this.detection = character.detection || 0;
      this.carry_capacity = character.carry_capacity || 0;
      this.max_panix = character.max_panix || 0;
      this.panix_decay = character.panix_decay || 0;
      this.max_hp = character.max_hp || 0;
      this.health_regeneration = character.health_regeneration || 0;
      this.max_stamina = character.max_stamina || 0;
      this.stamina_regeneration = character.stamina_regeneration || 0;

  }

  static create() {
    let a = new Character();
    return a;
  }

}

export default Character;
