Famono.scope('famous/src/physics/forces/Force', ["famous/src/math/Vector","famous/src/core/EventHandler"], function(require, define, exports, module) {
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2015
 */

define(function(require, exports, module) {
    var Vector = require('famous/src/math/Vector');
    var EventHandler = require('famous/src/core/EventHandler');

    /**
     * Force base class.
     *
     * @class Force
     * @uses EventHandler
     * @constructor
     */
    function Force(force) {
        this.force = new Vector(force);
        this._eventOutput = new EventHandler();
        EventHandler.setOutputHandler(this, this._eventOutput);
    }

    /**
     * Basic setter for options
     *
     * @method setOptions
     * @param options {Objects}
     */
    Force.prototype.setOptions = function setOptions(options) {
        this._eventOutput.emit('change', options);
    };

    /**
     * Adds a force to a physics body's force accumulator.
     *
     * @method applyForce
     * @param targets {Array.Body} Array of bodies to apply a force to.
     */
    Force.prototype.applyForce = function applyForce(targets) {
        var length = targets.length;
        while (length--) {
            targets[length].applyForce(this.force);
        }
    };

    /**
     * Getter for a force's potential energy.
     *
     * @method getEnergy
     * @return energy {Number}
     */
    Force.prototype.getEnergy = function getEnergy() {
        return 0.0;
    };

    module.exports = Force;
});

});