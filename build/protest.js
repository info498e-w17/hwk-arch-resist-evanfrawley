/**
 * Created by Wei-Jen on 1/18/17.
 */
"use strict";
var Protest = (function () {
    function Protest(name, zipcode, time) {
        this.name = name;
        this.location = new ZcLocation(zipcode);
        this.time = new Date(time);
        this.protesters = [];
        this.movements = [];
    }
    // Change the name or time of the Protest
    Protest.prototype.modify = function (newName, newTime) {
        if (newName) {
            this.name = newName;
        }
        if (newTime) {
            this.time = new Date(newTime);
        }
    };
    // Adds a Protester
    Protest.prototype.addProtester = function (newProtester) {
        // If the name already exists, bail out.
        for (var i = 0; i < this.protesters.length; i++) {
            if (this.protesters[i].getName().toLowerCase() === newProtester.getName().toLowerCase()) {
                return;
            }
        }
        this.protesters.push(newProtester);
    };
    // Adds a Movement
    Protest.prototype.addMovemnet = function (newMovement) {
        // If the name already exists, bail out.
        for (var i = 0; i < this.movements.length; i++) {
            if (this.movements[i].getName().toLowerCase() === newMovement.getName().toLowerCase()) {
                return;
            }
        }
        this.movements.push(newMovement);
    };
    // Getter methods
    Protest.prototype.getName = function () {
        return this.name;
    };
    Protest.prototype.getLocation = function () {
        return this.location;
    };
    Protest.prototype.getTime = function () {
        return this.time;
    };
    Protest.prototype.getProtesters = function () {
        return this.protesters;
    };
    Protest.prototype.getMovements = function () {
        return this.movements;
    };
    return Protest;
}());
exports.Protest = Protest;