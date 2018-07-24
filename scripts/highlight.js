function highLightYellow(request) {
  var words = request;
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

//For Analyze Sentiment Highlighing:

// function highLightYellow(request) {
//   var words = request.document.content;
//   var isolatedWord = words.split(" ")
//   for (let i = 0; i < isolatedWord.length; i++) {
//     var word = words;
//     var rgx = new RegExp('\\b('+word+')\\b', 'ig');
//
//     $('p, article, h1, h2, h3, h4, h5, h6, a, div').contents().filter(function() {
//       return this.nodeType === 3;
//     }).each(function() {
//       $(this).replaceWith($(this).text().replace(words, `<span class="extra">${words}</span>`));
//     });
//     $('.extra').css("background-color", "yellow");
//   }
// }
