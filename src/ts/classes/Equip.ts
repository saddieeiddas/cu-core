/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Item from './Item';

class Equip  {
    
  head: Item;
  shoulder: Item;
  rightHand: Item;
  leftHand: Item;
  rightArm: Item;
  leftArm: Item;
    
  //TODO add all the others
    
  constructor(equip = <Equip>{}) {
      this.head = equip.head ||  null;
      this.shoulder = equip.shoulder ||  null;
      this.rightHand = equip.rightHand ||  null;
      this.leftHand = equip.leftHand ||  null;
      this.rightArm = equip.rightArm ||  null;
      this.leftArm = equip.leftArm ||  null;
  }

  static create() {
    let a = new Equip();
    return a;
  }

}

export default Equip;
