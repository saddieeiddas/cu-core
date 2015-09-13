/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Player from './Player';
import Inventory from './Inventory';
import EquippedItems from './EquippedItems';
import BaneBoon from './BaneBoon';

export interface PrimaryStats {
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
};

export interface SecondaryStats {
  hearing: number;
  clarity: number;
  mass: number;
  presence: number;
  affinity: number;
};

export interface DerivedStats {
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
};



class Character extends Player{

  inventory: Inventory;
  banes: BaneBoon[];
  boons: BaneBoon[];
  equippedItems: EquippedItems;

  primaryStats: PrimaryStats;
  secondaryStats: SecondaryStats;
  derivedStats: DerivedStats;



  constructor(character = <Character>{}) {
    super(character)
    this.inventory = character.inventory || new Inventory();
    this.equippedItems = character.equippedItems || new EquippedItems();
    this.banes = character.banes ||  <BaneBoon[]>[];
    this.banes = character.boons ||  <BaneBoon[]>[];

    /*
    this.primaryStats = character.primaryStats ||  <PrimaryStats>{};
    this.secondaryStats = character.secondaryStats ||  <SecondaryStats>{};
    this.derivedStats = character.derivedStats ||  <DerivedStats>{};
    */

    this.primaryStats.strength = character.primaryStats.strength || 0;
    this.primaryStats.agility = character.primaryStats.agility || 0;
    this.primaryStats.endurance = character.primaryStats.endurance || 0;
    this.primaryStats.will = character.primaryStats.will || 0;
    this.primaryStats.resonance = character.primaryStats.resonance || 0;
    this.primaryStats.dexterity = character.primaryStats.dexterity || 0;
    this.primaryStats.vitality = character.primaryStats.vitality || 0;
    this.primaryStats.attunement = character.primaryStats.attunement || 0;
    this.primaryStats.faith = character.primaryStats.faith || 0;
    this.primaryStats.eyesight = character.primaryStats.eyesight || 0;

    this.secondaryStats.hearing = character.secondaryStats.hearing || 0;
    this.secondaryStats.clarity = character.secondaryStats.clarity || 0;
    this.secondaryStats.mass = character.secondaryStats.mass || 0;
    this.secondaryStats.presence = character.secondaryStats.presence || 0;
    this.secondaryStats.affinity = character.secondaryStats.affinity || 0;

    this.derivedStats.maxMoveSpeed = character.derivedStats.maxMoveSpeed || 0;
    this.derivedStats.vision = character.derivedStats.vision || 0;
    this.derivedStats.detection = character.derivedStats.detection || 0;
    this.derivedStats.carryCapacity = character.derivedStats.carryCapacity || 0;
    this.derivedStats.maxPanic = character.derivedStats.maxPanic || 0;
    this.derivedStats.panixDecay = character.derivedStats.panixDecay || 0;
    this.derivedStats.maxHp = character.derivedStats.maxHp || 0;
    this.derivedStats.healthRegeneration = character.derivedStats.healthRegeneration || 0;
    this.derivedStats.maxStamina = character.derivedStats.maxStamina || 0;
    this.derivedStats.staminaRegeneration = character.derivedStats.staminaRegeneration || 0;
    
  }

  static create() {
    let a = new Character();
    return a;
  }

}

export default Character;
