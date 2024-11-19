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
    ],
    guides: [
      'goodesses', 'gods', 'animals', 'angels',
    ],
    tools:
    ['candles', 'insence', 'symbol', 'meditaion', 'crystal', 'element'  ]
  })
};

//add relevant element trait for each type. 

exports.getRitual = (req, res, next) => {
  // return an array of posts
  res.status(200).json({
    rituals: [
      {
        title: 'First Ritual',
        content: 'This is the first Ritual!'
      }
    ]
  })
};
 
exports.createRitual = (req, res, next) => {
  // get post's title and content from the request
  const title = req.body.title;
  const content = req.body.content;
  // create a post with a dynamic Id with the current date
  // return a confirmation message with the created post object
  res.status(201).json({
    message: 'Ritual created successfully!',
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content
    }
  });
}