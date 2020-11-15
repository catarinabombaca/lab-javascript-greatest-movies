// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let newArray = movies.map(movie => movie.director);
    return newArray;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let newArray = movies.filter(function(movie){
        return movie.director === "Steven Spielberg" && 
        movie.genre.includes("Drama")
    });
    return newArray.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if(movies.length === 0) {
        return 0
    } else {
    let sum = movies.reduce(function (sum, current) {
        if (!(typeof current.rate === "number")) {
            return sum + 0
        } else {
        return sum + current.rate
        }
    }, 0);
    return Math.round(sum/movies.length*100)/100;
    }
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaArray = movies.filter(function(movie){
        return movie.genre.includes("Drama")
    });
    return ratesAverage(dramaArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let newArray = [...movies];
    return newArray.sort(function (a, b) {
        if(a.year === b.year) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
        }
        return a.year - b.year
    });
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let titlesArray = movies.map(movie => movie.title);
    titlesArray.sort();
    return titlesArray.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const cloneMovies = [...movies];
    let newArray = cloneMovies.map(function(movie){
        let totalMin = 0;
        let indexHours = movie.duration.indexOf("h");
        let indexMinutes = movie.duration.indexOf("min");
        indexHours > 0 ? totalMin += parseInt(movie.duration.slice(0,indexHours))*60 : totalMin = parseInt(movie.duration);
        
        indexMinutes > 0 && indexHours >0 ? totalMin += parseInt(movie.duration.slice(indexMinutes-2)) : totalMin += 0;
        
        movie.duration = totalMin;
        return movie;
    })
    return newArray;
} 

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if(movies.length === 0) {
        return null;
    } else {
    let yearsArray = movies.map(movie => movie.year);

    let uniqueYearsArray = [];
    for (let i = 0; i < yearsArray.length; i++) {
        let value = yearsArray[i];
        if (uniqueYearsArray.indexOf(value) !== -1) {
            continue
          } else {
            uniqueYearsArray.push(value);
          }
        }
    
    let avgOfYears = [];
    for (let i=0; i<uniqueYearsArray.length; i++) {
        let currentYearArray = movies.filter(function(movie){
            return movie.year === uniqueYearsArray[i];
        });
        avgOfYears.push({year: uniqueYearsArray[i], avg: ratesAverage(currentYearArray)});
    }

    avgOfYears.sort(function (a, b) {
        if(a.avg === b.avg) {
            return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
        } else {
            return b.avg - a.avg;
        }
    });

    return `The best year was ${avgOfYears[0].year} with an average rate of ${avgOfYears[0].avg}`
    }
}
 
