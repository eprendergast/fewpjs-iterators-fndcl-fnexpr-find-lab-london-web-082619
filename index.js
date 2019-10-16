const returnVar = {}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];

function superbowlWin(array){
  ;
  if (winningYear == true){
    return winningYear.year;
  } else {
    return undefined;
  }
}

function checkForWin(object){
  if (object.result == "W"){
    return object.year;
  } else {
    return undefined;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  console.log('Hi')



  superbowlWin(record);



})