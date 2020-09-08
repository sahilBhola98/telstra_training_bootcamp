import IArticle from '../models/IArticle';
export function fetchAndShowArticles() {
    // fetch( `http://localhost:3000/products` )
    fetch( `http://localhost:4201/articles` )
        .then(function( response :Response  ) {
            return response.json();
        })
        .then(function( articles : IArticle[]  ) {
            console.log( articles );
            
            const card = <HTMLElement> document.querySelector( '.card' );
            
            // go through workshops array and form HTML within tbody
            articles.forEach(function( article ) {
                card.innerHTML += ` <img class="card-img-top" src="${article.imageUrl}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">title</h5>
                  <p class="card-text">${article.title}</p>
                  <p class="card-text">${article.abstract}</p>
                </div>`;
            });
        })
        .catch(function( error ) {
            console.log( error.message );
        });
    }