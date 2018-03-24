rover = { 
  direction: "N",
  x: 0,
  y: 0,
  command: ["r","f","f","r","f","f","l","b","r","f","r","f","f"],
  travelLog: [0,0]
};
// ======================
for (i = 0; i <= rover.command.length ; i++) {
    var com = rover.command[i];
      if ((rover.x < 10 && rover.x >= 0) && (rover.y < 10 && rover.y >= 0)){
if (rover.direction === "N"){
switch (com){
  case "r":
    console.log(turnRight());
    console.log("The current direction is East.");
    rover.direction= "E";
  break;
  case "l":
    console.log(turnLeft());
    console.log("The current direction is West.");
    rover.direction= "W";
  break;
  case "f":
    console.log(moveForward());
  break;
  case "b":
    console.log(moveBackward());
  break;
}}
else if (rover.direction === "S"){
switch (com){
  case "r":
    console.log(turnRight());
    console.log("The current direction is West.");
    rover.direction= "W";
  break;
  case "l":
    console.log(turnLeft());
    console.log("The current direction is East.");
    rover.direction= "E";
  break;
  case "f":
    console.log(moveForward());
  break;
  case "b":
    console.log(moveBackward());
  break;
}}
else if (rover.direction === "E"){
switch (com){
  case "r":
    console.log(turnRight());
    console.log("The current direction is South.");
    rover.direction= "S";
  break;
  case "l":
    console.log(turnLeft());
    console.log("The current direction is North.");
    rover.direction= "N";
  break;
  case "f":
    console.log(moveForward());
  break;
  case "b":
    console.log(moveBackward());
  break;
}}
else if (rover.direction === "W"){
switch (com){
  case "r":
    console.log(turnRight());
    console.log("The current direction is North.");
    rover.direction= "N";
  break;
  case "l":
    console.log(turnLeft());
    console.log("The current direction is South.");
    rover.direction= "S";
  break;
  case "f":
    console.log(moveForward());
  break;
  case "b":
    console.log(moveBackward());
  break;
}}
}else {
    console.log("Roam off the map!!!");
    break;
}}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(direction, x, y, travelLog, command){
  console.log("moveForward was called");
  if (rover.direction === "W"){
    rover.x = rover.x - 1;
    rover.y = rover.y;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  } 
  else if (rover.direction === "E"){
    rover.x = rover.x + 1;
    rover.y = rover.y;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  }
  else if (rover.direction === "N"){
    rover.x = rover.x;
    rover.y = rover.y - 1;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  } 
  else if (rover.direction === "S"){
    rover.x = rover.x;
    rover.y = rover.y + 1;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  }
}
function moveBackward(direction, x, y, travelLog, command){
  console.log("moveBackward was called");
  if (rover.direction === "W"){
    rover.x = rover.x + 1;
    rover.y = rover.y;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  } 
  else if (rover.direction === "E"){
    rover.x = rover.x - 1;
    rover.y = rover.y;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  }
  else if (rover.direction === "N"){
    rover.x = rover.x;
    rover.y = rover.y + 1;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  } 
  else if (rover.direction === "S"){
    rover.x = rover.x;
    rover.y = rover.y - 1;
    console.log("The current position: x = " + rover.x+",", "y = " + rover.y);
    rover.travelLog.push(rover.x, rover.y);
    console.log("Traveled spaces:["+ rover.travelLog+"]");
  }
}
