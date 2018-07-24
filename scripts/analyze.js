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

      var highNumbers = saliences.sort(function(a, b){return b-a}); //Find the top 10 most important names
      for (let i = 0; i < 10; i++) {
        let location = saliences.indexOf(highNumbers[i]);
        importantFigures.push(names[location]);
      }
      keywords = importantFigures.join(' ');
      console.log(`Important Figures: ${keywords}`);
      highLightYellow(keywords);

    }
  }
}
