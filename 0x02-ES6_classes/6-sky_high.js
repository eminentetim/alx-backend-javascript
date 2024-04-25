import Building from './5-building.js'; // Adjust the import path according to your setup

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent constructor with sqft
    super(sqft);

    // Store attributes with underscore prefix
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
