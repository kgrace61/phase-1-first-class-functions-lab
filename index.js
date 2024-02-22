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
const createFareDoubler = (fareDoubler) => {
    return (fare) => {
        return fare * fareMultiplier(2)
    }
}