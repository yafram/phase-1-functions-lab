// Code your solution in this file!

const hqBlock = 42;

function distanceFromHqInBlocks(pickUpBlock) {
  //const hqBlock = 42;
  
  if (pickUpBlock > hqBlock) {
  return pickUpBlock - hqBlock;
} else if (pickUpBlock < hqBlock) {
   return hqBlock - pickUpBlock;
}

}
console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));


const perBlockFeetLength = 264;
function distanceFromHqInFeet(pickUpBlock) {
  return distanceFromHqInBlocks(pickUpBlock) * perBlockFeetLength; 
  }


function distanceTravelledInFeet(pickUp, destination) {
  if (pickUp < destination) {
    return (destination - pickUp) * perBlockFeetLength;
  } else if (pickUp > destination) {
    return (pickUp - destination) * perBlockFeetLength;
  }
}
console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(pickUp, destination) {
  const distance = distanceTravelledInFeet(pickUp, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}



























