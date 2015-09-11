/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import race from '../constants/race';
import archetype from '../constants/archetype';

class Combatant {

  name: string;
  health: number;
  maxHealth: number;
  stamina: number;
  maxStamina: number;

  constructor(combatant = <Combatant>{}) {
    this.name = combatant.name || "";
    this.health = combatant.health || 0;
    this.maxHealth = combatant.maxHealth || 0;
    this.stamina = combatant.stamina || 0;
    this.maxStamina = combatant.maxStamina || 0;
  }

  setRace(race: race) { } // override to support race
  setArchetype(archetype: archetype)  { } /// override to support archetype

  setName(name: string) {
    this.name = name;
  }

  setHealth(health: number, maxHealth: number) {
    this.health = health;
    this.maxHealth = maxHealth;
  }

  setStamina(stamina: number, maxStamina: number) {
    this.stamina = stamina;
    this.maxStamina = maxStamina;
  }

  static create() {
    let a = new Combatant();
    return a;
  }

}

export default Combatant;
