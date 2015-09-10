/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import race from '../constants/race';
import archetype from '../constants/archetype';

class ControlGame {

  arthurianScore: number;
  controlPoints: any[];
  gameState: number;
  timeLeft: number;
  tuathaDeDanannScore: number;
  vikingScore: number;

  constructor(data = <ControlGame>{}) {

    // Game State
    this.gameState = data.gameState || 0;

    // Game Score
    this.arthurianScore = data.arthurianScore || 0;
    this.tuathaDeDanannScore = data.tuathaDeDanannScore || 0;
    this.vikingScore = data.vikingScore || 0;

    // Time remaining
    this.timeLeft = data.timeLeft || 0;

    // Control Points (if included)
    this.controlPoints = data.controlPoints || null;
  }

  static create() {
    let a = new ControlGame();
    return a;
  }

}

export default ControlGame;
