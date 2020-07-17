//fileToMile

function feetToMile(feet){
  if (feet <=0){
    return "Distance can not be negative!"
  } else {
    var mile = feet / 5280;
    return mile;
  }
}




//woodCalculator

function woodCalculator(numOfChair, numOfTable, numOfBed){
  var woodForChair = numOfChair * 1;
  var woodForTable = numOfTable * 3;
  var woodForBed = numOfBed * 5;
  var total = woodForChair + woodForTable + woodForBed;
  return total;
  }





//brickCalculator

function brickCalculator(floorNum){
  if (floorNum <=10 && floorNum >=1){
    var brickNum = floorNum * 15000;
    return brickNum;
  }
  else if (floorNum > 10 && floorNum <= 20) {
    var brickNum = ((floorNum - 10) * 12000) + 150000;
    return brickNum;
  }
  else if (floorNum > 20){
    var brickNum =((floorNum - 20) * 10000) + 270000;
    return brickNum;
  }
  else {
    return "Something is wrong!";
  }
}




//tinyFriend

function tinyFriend(names){
  var tinyName = names[0];
  for ( var i = 0; i < names.length; i++){
    var name = names[i];
    if ( name.length < tinyName.length){
      tinyName = name;
    }
  }
  return tinyName;
}


