// const PubSub = require('../helpers/pub_sub.js');
import PubSub from '../helpers/pub_sub.js'

class InstrumentFamilyView {

  constructor(container) {
    this.container = container;
  };

  bindEvents() {
    PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) => {
      const instrumentFamily = evt.detail;
      this.render(instrumentFamily);
    });
  };

  render(family) {
    this.container.innerHTML = '';

    var {name: name , description: description, instruments: instruments} = family;

    const familyName = this.createElement('h2', name);
    this.container.appendChild(familyName);

    const familyDescription = this.createElement('p', description);
    this.container.appendChild(familyDescription);

    const instrumentListTitle = this.createElement('h3', 'Instruments include:');
    this.container.appendChild(instrumentListTitle);

    const instrumentList = this.createInstrumentList(instruments);
    this.container.appendChild(instrumentList);
  };

  createElement(elementType, text) {
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
  };

  createInstrumentList(instruments) {
    const list = document.createElement('ul');

    instruments.forEach((instrument) => {
      const listItem = document.createElement('li');
      listItem.textContent = instrument;
      list.appendChild(listItem);
    });

    return list;
  };

};

// In instrument_family_view.js refactor the `render` method to destructure the instrument
// `family`'s properties as the `family` is passed into the function. This will mean you can
// refer to the just the properties inside the function. For example, `name`, rather than `family.name`.

// module.exports = InstrumentFamilyView;
export default class InstrumentFamilyView;
