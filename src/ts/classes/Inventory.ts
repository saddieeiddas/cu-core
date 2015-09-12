/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import Item from './Item';

class Inventory  {
  items: any[];

  constructor(inventory = <Inventory>{}) {
    this.items = inventory.items || []
  }

  static create() {
    let a = new Inventory();
    return a;
  }

}

export default Inventory;
