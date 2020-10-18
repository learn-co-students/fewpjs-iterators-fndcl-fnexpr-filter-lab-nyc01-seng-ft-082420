// Code your solution here
const findMatching = (drivers, nameToMatch) => {
   return drivers.filter(name => 
       name.toLowerCase() === nameToMatch.toLowerCase()
    )
}

const fuzzyMatch = (drivers, nameToMatch) => {
    return drivers.filter(name => 
        name[0].toLowerCase() === nameToMatch[0].toLowerCase()
        )
}

const matchName = (drivers, nameToMatch) => {
    return drivers.filter(driver => 
        driver.name === nameToMatch
        )
}