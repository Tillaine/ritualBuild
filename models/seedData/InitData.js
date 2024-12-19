const purposes = require('./purpose');
const Purpose = require('../../models/purpose');
const Incense = require('../../models/incense');
const animals = require('./animals')
const crystals = require('./crystals')
const goddesses = require('./goddesses')
const incenses = require('./incense');

console.log({incenses}) 

const saveData = async () => {
    for (const incense of incenses) {
      try {
        const newIncense = new Incense(incense);
        await newIncense.save();
        console.log("Document saved:", newIncense);
      } catch (error) {
        console.error("Error saving document:", error);
      }
    }
  };

saveData()

// console.log( {goddesses, animals, incense,  crystals})
console.log( {goddesses: goddesses.map(gds => gds.name), animals: animals.map(gds => gds.name), incense: incenses.map(gds => gds.name), crystals: crystals.map(gds => gds.name), animalCOunt: animals.length, goddessCount: goddesses.length, crystalCOunt: crystals.length, incenseCount: incenses.length

})

  module.exports = Purpose 