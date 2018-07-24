//When any webpage/document loads...

$(document).ready(function() {
  if (autoScan) {
    var article = $('p article, h1, h2, h3, h4, h5, h6, a, div').text(); //Select all headlines, articles, and paragraphs...
    var generalRequest = {
      document: {
        type: "PLAIN_TEXT",
        content: article //Add them in plain text
      },
      encodingType: "UTF8"
    };
    analyzeEntities(generalRequest); //Extract the entities
  }
});

$('#scanPage').click(function() {
  console.log('Clicked on me bootn');
  var article = $('p article, h1, h2, h3, h4, h5, h6, a, div').text(); //Select all headlines, articles, and paragraphs...
  var generalRequest = {
    document: {
      type: "PLAIN_TEXT",
      content: article //Add them in plain text
    },
    encodingType: "UTF8"
  };
  analyzeEntities(generalRequest); //Extract the entities
});
