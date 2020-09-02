// Create a movie object that represents details of your favorite movie. Suggested information to have in the object - name, cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast member's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to the current boxOfficeCollection.


//Solution:
let movie={
  name:"XYZ",
  cast:["a","b","c"],
  yearOfRelease:1998,
  boxOfficeCollection:100003289382,
  addToCast:function(newMember){
    this.cast.push(newMember);
  },
  addToCollection:function(amount){
    this.boxOfficeCollection+=amount;
  }
};
