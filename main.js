
// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Don't warn twice for the same draft
var warned = {};


$(document).ready(function() {


  function analyzeSentiment(request) {

    var nlpreq = new XMLHttpRequest(); //Send a request to the server
    nlpreq.open("POST", "https://language.googleapis.com/v1beta1/documents:analyzeSentiment?key=" + API_KEY, true); //Method and link to server

    nlpreq.setRequestHeader("Content-type", "application/json");


    nlpreq.send(JSON.stringify(request));      //Send the request as a string for the "POST" method [OLD] JSON.stringify(request)

    nlpreq.onreadystatechange = function() {
      if(nlpreq.readyState == 4 && nlpreq.status == 200) { //A status of 200 means a successful HTTP request was recieved

        response = JSON.parse(nlpreq.responseText); //The response text from the server after the request. This line parses the JSON request into a javascript object
        sentiment = parseFloat(response['documentSentiment']['score']); //Turns the number in the response into a real number, not a string
        magnitude = parseFloat(response['documentSentiment']['magnitude']);

        //console.log(`Sentiment: ${sentiment} \n Magnitude: ${magnitude}`);
        console.log('*****{=====LOADING=====}*****');

        if (sentiment >= 0.5 || sentiment <= -0.5) {
          highLightYellow(request);
        }
      }
    }
  }


  function analyzeEntities(request) {
    var nlpreq = new XMLHttpRequest();
    nlpreq.open("POST", "https://language.googleapis.com/v1beta1/documents:analyzeEntities?key=" + API_KEY, true);

    nlpreq.setRequestHeader("Content-type", "application/json");

    nlpreq.send(JSON.stringify(request));
    nlpreq.onreadystatechange = function() {
      if(nlpreq.readyState == 4 && nlpreq.status == 200) {

        response = JSON.parse(nlpreq.responseText);

        var names = [];
        var types = [];
        var metadatas = [];
        var saliences = [];
        var importantFigures = [];

        for (let i = 0; i < Object.keys(response.entities).length; i++) {
          let currentEntity = response.entities[i];
          names.push(currentEntity.name);
          types.push(currentEntity.type);
          metadatas.push(JSON.stringify(currentEntity.metadata));
          saliences.push(currentEntity.salience);
        }

        var highNumbers = saliences.sort(function(a, b){return b-a});
        for (let i = 0; i < 10; i++) {
          let location = saliences.indexOf(highNumbers[i]);
          importantFigures.push(names[location]);
        }
        keywords = importantFigures.join(' ');
        console.log(`Important Figures: ${keywords}`);

      }
    }
  }
  var article = $('p').text();
  var allMedia = $('article, h1, h2, h3, h4, h5, h6, a, div').text();
  //var articlestag = $('div').text();

  var entityrequest = {
    document: {
      type: "PLAIN_TEXT",
      content: article
    },
    encodingType: "UTF8"
  };
  analyzeEntities(entityrequest);

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
    var sentimentrequest2 = {
      document: {
        type: "PLAIN_TEXT",
        content: allMedia
      },
      encodingType: "UTF8"
    };
    analyzeSentiment(sentimentrequest);
    analyzeSentiment(sentimentrequest2);
  }
  analyzeSentiment(entityrequest);

  function highLightYellow(request) {
    var words = request.document.content;
    var isolatedWord = words.split(" ")
    for (let i = 0; i < isolatedWord.length; i++) {
      var word = words;
      var rgx = new RegExp('\\b('+word+')\\b', 'ig');

      $('p, article, h1, h2, h3, h4, h5, h6, a, div').contents().filter(function() {
        return this.nodeType === 3;
      }).each(function() {
        $(this).replaceWith($(this).text().replace(words, `<span class="extra">${words}</span>`));
      });
      $('.extra').css("background-color", "yellow");
    }
  }
  console.log('Document Analysis Complete');
});
