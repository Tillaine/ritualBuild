const Purpose = require('../models/purpose');

exports.getRitualOptions = (req, res, next) => {
    // return an array of posts
    res.status(200).json({
      purpose: [
        'abundance',
        'luck',
        'fertility',
        'protection',
        'travel',
        'love',
        'healing',
        'griefe',
        'communication',
        'conflict'
      ]
    })
  };


  exports.getPurpose = (req, res, next) => {
    // return array of existing posts
    Purpose.find().then(foundPurpose => {
      res.json({
        message: "All posts",
        Purpose: foundPurpose
      });
    });
  }
  
   
  exports.createPurpose = (req, res, next) => {
    const title = req.body.purpose;
   console.log({body: req.body.purpose})
    const purpose = new Purpose({
      purpose: title,
    });
   
    // save the instance to the database
    purpose
    .save()
    .then(postSaved => {
      res.status(201).json({
        message: 'Purpose created successfully!',
        post: postSaved
      });
    })
    .catch(err => console.log('err', err));
  
  }