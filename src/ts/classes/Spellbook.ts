/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Ability from './Ability';

class Spellbook  {
  abilities: Ability[];

  constructor(spellbook = <Spellbook>{}) {
    spellbook.abilities = spellbook.abilities ||  <Ability[]>[];
  }

  static create() {
    let a = new Spellbook();
    return a;
  }

}

export default Spellbook;
