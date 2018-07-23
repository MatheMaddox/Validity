# Validity

A browser extension that automatically analyzes and cross-references facts and phrases to detect false or biased facts and stories by highlighting text.
​
## Audience

Anyone who reads the news or any kind of media and has a computer would use this to distinguish fact from "fake news".
​
## Experience

A user simply has to click on the validity icon in the top-right corner of their browser, and click "Analyze" for Validity to start highlighting text on their page.
​
# Technical

## Models

We start with the raw text on the page of whatever news website the client is browsing. The extension will use the Google Cloud Natural Language Processing API to determine potential bias and to extract the top 10 most important keywords on the page.
## Views

We only need one view, which is the settings page after a user clicks on the icon in their browser. It will feature a short description, and a key for the highlighted colors. It will also have four switches/buttons: Auto-vet (switch), Scan this Page (button), Fact Checker (switch), and Check for Bias (switch).  The first two tell the app if it should never scan pages, always scan every page visited, or scan only the current page. The second pair of switches determines which features of the app should be enabled.
​
## Routes

The extension must send a request to the Google Cloud NLP API and receive a response rating each sentence on the page. After extracting the ten keywords it will send those words to multiple news sources from left-wing, right-wing, and politically neutral news sources to see if those sources contain similar articles, and rate each of those words based on how many sources verified that fact. Afterwards, it will highlight each sentence on the page if it's important enough (determined by google's API) and color code the phrases.
​
​
## Other

We need to use google cloud's NLP API, and we'll need another API that will search the keywords on each of the trusted sites.
​
# Weekly Milestone
## Week 4 - Usable Build

Required Minimum Features:
- Extract Facts
- Decide if each sentence has a magnitude worth fact-checking
- Determine rank of bias for each sentence and overall bias
- Extract all entities on the page, along with their salience (rank of importance)
- Search the top 10 most important entities on other trusted sources
- Highlight each fact and sentence based on bias-rank and truth-rank
​
## Week 5 - Finish Features

Extra Features:
- Settings page with toggle-able features
- Change the color of highlighted words?
- Make the extension compatible with other browsers (firefox extension?)
​
## Week 6 - Polish

Polish Requirements before going Live:
- Clean up all the code written
- Create an icon/logo
- Finish the extension manifest + description
- Upload the extension to the chrome web store (create an account)
- Fill our descriptions and take screenshots for web store
