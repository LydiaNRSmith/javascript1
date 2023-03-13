//getMotto function
function getMotto(){
    return prompt("Please enter your favorite motto: ");
}

//getCount function
function getCount(){
    return parseFloat(prompt("How many times do you want to see your motto? "));
}

//printMotto function
function printMotto(motto, count){
    for(let i = 1; i < count + 1; i++){
        console.log(i + ". " + motto);
    }
}

//calling printMotto function
let motto = getMotto();
let count = getCount();
printMotto(motto, count);

//getMovie function
function getMovie(){
    return prompt("Please enter your favorite film: ");
}

//get_movie_count_function
function get_movie_count(){
    return parseFloat(prompt("How many times do you want to see your movie?"));
}

//printMovie function
let i = 1;
function printMovie(movie, movie_count){
    while(i < movie_count + 1){
        console.log(i + ". " + movie);
        i++;
    }
    
}

//calling printMovie function
let movie = getMovie();
let movie_count = get_movie_count();
printMovie(movie, movie_count);