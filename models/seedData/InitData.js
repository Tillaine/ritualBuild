const purposes = require('./purpose');
const Purpose = require('../../models/purpose');
const Incense = require('../../models/incense');
const Animal = require('../../models/animal'); 
const Goddess = require('../../models/goddess');
const Crystal = require('../../models/crystal');
const animals = require('./animals')
const crystals = require('./crystals')
const goddesses = require('./goddesses')
const incenses = require('./incense');

const saveData = async () => {
    // for (const incense of incenses) {
    //   try {
    //     const newIncense = new Incense(incense);
    //     await newIncense.save();
    //     console.log("Document saved:", newIncense);
    //   } catch (error) {
    //     console.error("Error saving document:", error);
    //   }
    // }
    // for (const crystal of crystals) {
    //   try {
    //     const newCrystal = new Crystal(crystal);
    //     await newCrystal.save();
    //     console.log("Document saved:", newCrystal);
    //   } catch (error) {
    //     console.error("Error saving document:", error);
    //   }
    // }
    // for (const animal of animals) {
    // try {
    //     const newAnimal = new Animal(animal);
    //     await newAnimal.save();
    //     console.log("Document saved:", newAnimal);
    //   } catch (error) {
    //     console.error("Error saving document:", error);
    //   }
    // }
    for (const goddess of goddesses) {
        try {
            const newGoddess = new Goddess(goddess);
            await newGoddess.save();
            console.log("Document saved:", newGoddess);
          } catch (error) {
            console.error("Error saving document:", error);
          }
        }
  };


// const saveData = async () => {
//     for (const incense of incenses) {
//       try {
//         const newIncense = new Incense(incense);
//         await newIncense.save();
//         console.log("Document saved:", newIncense);
//       } catch (error) {
//         console.error("Error saving document:", error);
//       }
//     }
//   };

saveData()

// console.log( {goddesses, animals, incense,  crystals})
// console.log( {goddesses: goddesses.map(gds => gds.name), animals: animals.map(gds => gds.name), incense: incenses.map(gds => gds.name), crystals: crystals.map(gds => gds.name), animalCOunt: animals.length, goddessCount: goddesses.length, crystalCOunt: crystals.length, incenseCount: incenses.length

// })

  module.exports = Purpose 