export default interface IArticle {

    "author":string,
    "title":string,
    "abstract":string,
    "body":string,
    "imageUrl":string,
    "createdAt":string,
    "comment":
        {
        "commenter":string,
        "title":string,
        "comment":string,
        "createdAt":string
    }
    
}