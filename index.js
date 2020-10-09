// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversObj = [
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
]

const findMatching = (driversArray, matching) => {
  return driversArray.filter( name => name.toLowerCase() === matching.toLowerCase() )
}

const fuzzyMatch = (driversArray, matching) => {
  return driversArray.filter (name => name[0].toLowerCase() === matching[0].toLowerCase())
}

const matchName = (driversArray, matching) => {
  return driversArray.filter (driver => driver.name.toLowerCase() === matching.toLowerCase() )
}