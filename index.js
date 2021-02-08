// Code your solution here
function findMatching(drivers, string) {
    //return matching list of drivers, case insensitive 
    let match = drivers.filter(driver => {
        return driver === string || driver === string.toLowerCase()
    })
    return match
}

function fuzzyMatch(drivers, string) {
    //returns all drivers whose name begins with provided letters
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(drivers, string){
    // return each element whose name prop. matches the provided string arg
    return drivers.filter(function(object) { 
        if (object["name"] === string){
        return object 
        }
    })
}