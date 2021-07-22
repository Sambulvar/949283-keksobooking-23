function randomInteger (min,max) {
  if ((min>=0) && (min<=max)) {
    return Math.floor(min + Math.random()*(max + 1 - min));
  }
  return 'Неверное значение! min>=0, min<=max';
}
function randomNum (min,max,quantity) {
  if ((min>=0) && (min<=max)) {
    return (Math.trunc((min + Math.random()*(max - min))*Math.pow(10,quantity)))/Math.pow(10,quantity);
  }
  return 'Неверное значение! min>=0, min<=max';
}
randomInteger(30, 40);
randomNum(100, 105,3);
