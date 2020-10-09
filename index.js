// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(d => 
        d.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => 
        d.toLowerCase().indexOf(string.toLowerCase()) === 0
    ) 
}

function matchName(drivers, string) {
    return drivers.filter(d => d.name === string)
}