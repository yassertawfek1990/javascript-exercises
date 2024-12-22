const findTheOldest = function(people) {
    return people.reduce((a,b)=> {
        const young =  (!b.yearOfDeath? Number(new Date().getFullYear()):b.yearOfDeath) -b.yearOfBirth
        const old = (!a.yearOfDeath? Number(new Date().getFullYear()):a.yearOfDeath) - a.yearOfBirth
        return old > young?a:b
    }
    
    )
}
// Do not edit below this line
module.exports = findTheOldest;
