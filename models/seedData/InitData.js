const purposes = require('./purpose');
const Purpose = require('../../models/purpose');


  // save init purpose 

  const savePurposeData = () => purposes.map(purpose => {
    Purpose({purpose}) 

    const newPurpose = new Purpose({ purpose });
      
    // save the instance to the database
    newPurpose
    .save()
    .then(purposeSaved => console.log(purposeSaved))
})

savePurposeData()

// console.log( {yo:'bit', purposes, test: new Purpose({ purpose: 'test' })})

  module.exports = Purpose 