
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

    quote_text_global = parsed_response_text.quote;
    quote_author_global = parsed_response_text.author;

};

// link the get quote button to the function in a separated way

document.getElementById("new-quote").addEventListener("click", fetch_new_quote);


// setup the quote fetch on load

window.onload = fetch_new_quote;






//  href="http://twitter.com/intent/tweet"


//

let quote_text_global = '';
let quote_author_global = '';


const share_tweet = function (quote_string, author_name) {

    quote_string = quote_text_global;
    author_name = quote_author_global;

    // set tweet url
    const concated_full_url = "https://twitter.com/intent/tweet?text=\"" + quote_string + "\" -- " + author_name;

    // open tweet page in new tab
    window.open(concated_full_url, "_blank");
};





// event listener
    // grab the tweet button.
    // listen for a click
const tweet_button = document.getElementById('tweet-quote');
tweet_button.addEventListener("click", share_tweet);


