/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Item from './Item';

class Equip  {
    
  head: Item;
  shoulder: Item;
  right_hand: Item;
  left_hand: Item;
  right_arm: Item;
  left_arm: Item;
    
  constructor(equip = <Equip>{}) {
      this.head = equip.head ||  null;
      this.shoulder = equip.shoulder ||  null;
      this.right_hand = equip.right_hand ||  null;
      this.left_hand = equip.left_hand ||  null;
      this.right_arm = equip.right_arm ||  null;
      this.left_arm = equip.left_arm ||  null;
  }

  static create() {
    let a = new Equip();
    return a;
  }

}

export default Equip;
