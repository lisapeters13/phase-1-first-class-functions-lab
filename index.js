// Code your solution in this file!
 const returnFirstTwoDrivers = function(drivers) {
        return drivers.slice(0, 2);
      };
    //   console.log(returnFirstTwoDrivers(['Antonia', 'Nuru']));

     const returnLastTwoDrivers = () => ['Amari', 'Mo'];
     const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    //  selectingDrivers[0](); // Invokes the first function, returnFirstTwoDrivers
    //  selectingDrivers[1](); // Invokes the second function, returnLastTwoDrivers

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }


console.log (createFareMultiplier(2))


//   const quadrupleFare = createFareMultiplier(4);
// console.log(quadrupleFare(4)); // Output: 16

  
  const fareDoubler = createFareMultiplier(2) 
  console.log (fareDoubler(5))
  
const fareTripler = createFareMultiplier(3)
  console.log (fareTripler(6))

  function selectDifferentDrivers(drivers, driverSelector) {
    const selectedDrivers = driverSelector(drivers);
  
    if (driverSelector === returnFirstTwoDrivers) {
      return selectedDrivers.slice(0, 2);
    } else {
      return selectedDrivers.slice(-2);
    }
  }
//   console.log(fareDoubler(10)); // Output: 20

//   const selectDifferentDrivers = function (returnFirstTwoDrivers, returnLastTwoDrivers)

// const firstTwoDrivers = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);
// console.log(firstTwoDrivers); // 

// const lastTwoDrivers = selectDifferentDrivers(allDrivers, returnLastTwoDrivers);
// console.log(lastTwoDrivers);


  