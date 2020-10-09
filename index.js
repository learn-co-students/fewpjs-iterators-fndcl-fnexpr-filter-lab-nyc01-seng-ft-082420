// Code your solution here
//const drivers = ['Bobby', 'Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, string) {
    return array.filter(function(x) {
        return x.toLowerCase() === string.toLowerCase()
        
    })
    
       
}


function fuzzyMatch(array, string) {
    return array.filter(function(x){
        if (x.includes(string)){
            return x
        }
    })
}
// const fuckYou = findMatching(drivers, 'bobby')
// console.log(fuckYou)

// const fuckFuzzy = fuzzyMatch(drivers, 'Sa')
// console.log(fuckFuzzy)

function matchName(array, string ) {
    return array.filter(function(x) {
        if (x.name === string) {
            return x
        }
            
        
    })
}

const fuckYoName = matchName(drivers, "Sammy")
console.log(fuckYoName)