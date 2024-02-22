const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (fareMultiplier) => {
    return (fare) =>{
        return fare * fareMultiplier
    }
}
const fareDoubler = (fare) => {
   const twoMultiplier = createFareMultiplier(2)
   console.log(twoMultiplier)
   return twoMultiplier(fare)
}

const fareTripler = (fare) => {
    const threeMultiplier = createFareMultiplier(3)
    console.log(threeMultiplier)
    return threeMultiplier(fare)
}
const selectDifferentDrivers = (drivers, driversFunction) => {
   return driversFunction(drivers)
   
}
//