console.log('scanPage.js');
var article = $('p article, h1, h2, h3, h4, h5, h6, a, div').text(); //Select all headlines, articles, and paragraphs...
var generalRequest = {
  document: {
    type: "PLAIN_TEXT",
    content: article //Add them in plain text
  },
  encodingType: "UTF8"
};
analyzeEntities(generalRequest); //Extract the entities
