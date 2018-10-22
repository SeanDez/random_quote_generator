
// request quote.text and author



const fetch_new_quote = function () {
    const xhr = new XMLHttpRequest();
    const quote_api_url = 'https://talaikis.com/api/quotes/random/';

    xhr.open('GET', quote_api_url);
    xhr.send();


    // a property that contains the event handler that executes when the readystatechange event is fired
    // can't just use the if block. This handler opens a watcher
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            update_texts(xhr);
        }
    }
};

const update_texts = function (response_object) {
    console.log(response_object.responseText);

    // parse the response property string into a JS object
    const parsed_response_text = JSON.parse(response_object.responseText);


    // grab an element
    const quote_element = document.getElementById("text");
    const author_element = document.getElementById("author");

    // set the elements equal to the new text
    quote_element.innerText = parsed_response_text.quote;
    author_element.innerText = parsed_response_text.author;

    console.log(parsed_response_text);
    console.log(parsed_response_text.quote);

};

// link the get quote button to the function in a separated way

document.getElementById("new-quote").addEventListener("click", fetch_new_quote);


// setup the quote fetch on load

window.onload = fetch_new_quote;


// grab the tweet button. Then have it tweet the quote

// event listener
const tweet_button = document.getElementById('tweet-quote');
const tweet_button_listener = tweet_button.addEventListener("click", open_tweet_page);


//  href="http://twitter.com/intent/tweet"


const open_tweet_page = function (quote_string) {
    
};

