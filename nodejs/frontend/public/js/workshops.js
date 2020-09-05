fetch( `http://workshops-server.herokuapp.com/workshops` )
 .then(function( response ) {
 return response.json();
 })
 .then(function( workshops ) {
 console.log( workshops );
 })
 .catch(function( error ) {
 console.log( error.message );
 });
