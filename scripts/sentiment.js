//For main.js

// var sentimentrequest2 = {
//   document: {
//     type: "PLAIN_TEXT",
//     content: allMedia //All the media
//   },
//   encodingType: "UTF8"
// };
// var sentences = article.match( /[^\.!\?]+[\.!\?]+/g ); //Break up thr article into individual sentences in an array
// for (let i = 0; i < sentences.length; i++) {
//   var sentence = sentences[i]; //Select an individual sentence from the array
//   var sentimentrequest = {
//     document: {
//       type: "PLAIN_TEXT",
//       content: sentence //An individual sentence for sentiment analysis
//     },
//     encodingType: "UTF8"
//   };
//
//   analyzeSentiment(sentimentrequest); //Analyze each sentence + headline
//   analyzeSentiment(sentimentrequest2);
// }
// analyzeSentiment(generalRequest); //Analyze the document as a whole



//for analyze.js

// function analyzeSentiment(request) {
//
//   var nlpreq = new XMLHttpRequest(); //Send a request to the server
//   nlpreq.open("POST", "https://language.googleapis.com/v1beta1/documents:analyzeSentiment?key=" + API_KEY, true); //Method and link to server
//
//   nlpreq.setRequestHeader("Content-type", "application/json");
//
//   nlpreq.send(JSON.stringify(request));      //Send the request as a string for the "POST" method [OLD] JSON.stringify(request)
//
//   nlpreq.onreadystatechange = function() {
//     if(nlpreq.readyState == 4 && nlpreq.status == 200) { //A status of 200 means a successful HTTP request was recieved
//
//       response = JSON.parse(nlpreq.responseText); //The response text from the server after the request. This line parses the JSON request into a javascript object
//       sentiment = parseFloat(response['documentSentiment']['score']); //Turns the number in the response into a real number, not a string
//       magnitude = parseFloat(response['documentSentiment']['magnitude']);
//
//       console.log('*****{=====LOADING=====}*****');
//
//       if (sentiment >= 0.5 || sentiment <= -0.5) { //If the text is too biased, highlight it
//         highLightYellow(request);
//       }
//     }
//   }
// } //DO NOT DELETE
