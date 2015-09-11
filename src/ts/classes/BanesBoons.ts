/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import channelId from '../constants/channelId';
import baneBoonCategory from '../constants/baneBoonCategory';

class BanesBoons  {

	id: string;
	channelId: channelId;
	name: string;
	description: string;
	category: baneBoonCategory;
	categoryId: number;
	icon: string;
	costPerRank: number;
	maxRanks: number;
	prerequisite: string;
	x: number;
	y: number;


  constructor(boonsbanes = <BanesBoons>{}) {
  	this.id = boonsbanes.id || "";
  	this.channelId = boonsbanes.channelId || channelId.NONE;
	  this.name = boonsbanes.name || "";
  	this.description = boonsbanes.description || "";
	  this.category = boonsbanes.category ||  baneBoonCategory.NONE;
  	this.categoryId = boonsbanes.categoryId || 0;
  	this.icon = boonsbanes.icon || "";
  	this.costPerRank = boonsbanes.costPerRank || 0;
  	this.maxRanks = boonsbanes.maxRanks || 0;
  	this.prerequisite = boonsbanes.prerequisite || "";
  	this.x = boonsbanes.x || 0;
  	this.y = boonsbanes.y || 0;
  
  }

  static create() {
    let a = new BanesBoons();
    return a;
  }

}

export default BanesBoons;
