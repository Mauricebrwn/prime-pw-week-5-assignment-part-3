console.log('***** Music Collection *****')
let collection = [];
let album = {
    title:'Nothing Was the Same',
    artist:'Drake',
    yearPublished:'2013'
}
console.log(collection);
function addToCollection() {
    collection.push(album)
    return album;
}
addToCollection();
addToCollection();
