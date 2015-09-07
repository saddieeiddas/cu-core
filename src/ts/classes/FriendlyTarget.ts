/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Combatant from './Combatant';

class FriendlyTarget extends Combatant {

  constructor(friendlytarget = <FriendlyTarget>{}) {
  	super(friendlytarget)
  }

  static create() {
    let a = new FriendlyTarget();
    return a;
  }

}

export default FriendlyTarget;
