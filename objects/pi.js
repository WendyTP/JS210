/*
PI radians = 180 degrees
1 radian = 180 degrees / PI
*/

function radianToDegree(radian) {
  const halfCircleDegree = 180;
  return (radian * halfCircleDegree) / Math.PI;
}

console.log(radianToDegree(1));
console.log(radianToDegree(5));