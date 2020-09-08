"use strict";
exports.__esModule = true;
exports.fetchAndShowArticles = void 0;
function fetchAndShowArticles() {
    // fetch( `http://localhost:3000/products` )
    fetch("http://localhost:4201/articles")
        .then(function (response) {
        return response.json();
    })
        .then(function (articles) {
        console.log(articles);
        var card = document.querySelector('.card');
        // go through workshops array and form HTML within tbody
        articles.forEach(function (article) {
            card.innerHTML += " <img class=\"card-img-top\" src=\"" + article.imageUrl + "\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">title</h5>\n                  <p class=\"card-text\">" + article.title + "</p>\n                  <p class=\"card-text\">" + article.abstract + "</p>\n                </div>";
        });
    })["catch"](function (error) {
        console.log(error.message);
    });
}
exports.fetchAndShowArticles = fetchAndShowArticles;
