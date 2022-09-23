/**
 * show rating
 * given a rating, display a star (*) for each full rating
 * and a full-stop (.) for each half rating
 */

function showRating(rating) {
    // initialise an empty string
    let ratings = "";

    for (let i = 0; i < Math.floor(rating); ++i) {
        // loop through the rounded down rating
        ratings += "*";
        // add a star for every iteration

        if (i !== Math.floor(rating) - 1) {
            // if it's not the last iteration,
            ratings += " ";
            // add a space
        }
    }

    if (Number.isInteger(rating) === false) {
        // if the number is not an integer,
        // (!Number.isInteger(rating))

        if (Math.floor(rating) < 1) {
            ratings += ".";
            // add a full-stop
        }
        else {
            ratings += " ."
        }
    }

    return ratings;
    // return it
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

/**
 * sort by lowest to highest price
 * given an array of numbers, return the prices
 * sorted by low to high
 */

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b)
    // .sort() sorts alphabetically
    // .sort(() => {}) sorts numerically
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
console.log(sortLowToHigh([5, 10, 0, -5]))
console.log(sortLowToHigh([3, 2, 1, 0]))

/**
 * sort by highest to lowest price
 * given an array of objects,
 * return the prices sorted by high to low
 */

function sortHighToLow(arr) {
    return arr.sort((a, b) => b.price - a.price)
}

console.log(
    sortHighToLow([
        { id: 1, price: 50 },
        { id: 2, price: 30 },
        { id: 3, price: 60 },
        { id: 4, price: 10 },
    ])
)

/**
 * find all the posts by a single user
 * call this API "https://jsonplaceholder.typicode.com/posts"
 * and return all the posts by any given userId
 */

// function postsByUser(userId) {
    // fetch('https://jsonplaceholder.typicode.com/posts').then(res => console.log(res))
    // console.log(userId)
// }

async function postsByUser(userId) {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
    // get promise from fetch API

    const result = await promise.json()
    // convert from backend to frontend readable JSON

    const posts = result.filter(element => element.userId === userId)


    console.log(posts)
}

postsByUser(4)

/**
 * first 6 incomplete todos
 * call this API "https://jsonplaceholder.typicode.com/posts"
 * and return the first 6 incomplete todo's from the result
 */

async function firstSixIncomplete() {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
    // get promise from fetch API

    const result = await promise.json()
    // convert from backend to frontend readable JSON

    const incompleteTasks = result.filter(elem => elem.completed === false).slice(0, 6)
                                        // (elem => !elem.completed) 
    console.log(incompleteTasks)
}

firstSixIncomplete()