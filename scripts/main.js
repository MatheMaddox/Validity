//When any webpage/document loads...

$(document).ready(function() {
  var article = $('p').text();
  var allMedia = $('article, h1, h2, h3, h4, h5, h6, a, div').text();
  var generalRequest = {
    document: {
      type: "PLAIN_TEXT",
      content: article
    },
    encodingType: "UTF8"
  };
  var sentimentrequest2 = {
    document: {
      type: "PLAIN_TEXT",
      content: allMedia
    },
    encodingType: "UTF8"
  };
  var sentences = article.match( /[^\.!\?]+[\.!\?]+/g );
  for (let i = 0; i < sentences.length; i++) {
    var sentence = sentences[i];
    var sentimentrequest = {
      document: {
        type: "PLAIN_TEXT",
        content: sentence
      },
      encodingType: "UTF8"
    };

    analyzeSentiment(sentimentrequest);
    analyzeSentiment(sentimentrequest2);
  }
  analyzeSentiment(generalRequest);
  analyzeEntities(generalRequest);
});
