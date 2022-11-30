console.log('***** Music Collection *****')
let collection = [];
let album = {
    title:'Nothing Was the Same',
    artist:'Drake',
    yearPublished:'2013'
}

function addToCollection() {
    collection.push(album)
    return album;
}
console.log(album)
addToCollection();
album = {
    title:'Take Care',
    artist:'Drake',
    yearPublished:'2011'
}
addToCollection();
album = {
    title:'good kid,m.A.A.d city',
    artist:'Kendrick Lamar',
    yearPublished:'2012'
}
addToCollection();
album = {
    title:'The Carter 2',
    artist:'Lil Wayne',
    yearPublished:'2005'
}
addToCollection();
album = {
    title:'The Red Light District',
    artist:'Ludacris',
    yearPublished:'2004'
}
addToCollection();
album = {
    title:'The College Dropout',
    artist:'Kanye West',
    yearPublished:'2004'
}
addToCollection();
album = {
    title:'The Blueprint',
    artist:'Jay Z',
    yearPublished:'2001'
}
addToCollection();
console.log(collection);

function showCollection() {
    for (let i=0; i<collection.length; i++){
    console.log(collection.length);
    console.log(title,'by',artist, 'published in year',yearPublished)

    }
    
}
showCollection();

let array = [];
function findByArtist() {
    for (let i=0; i<collection.length; i++){
    if (artist === artist) {
        findByArtist.push(array);
    }
}
}