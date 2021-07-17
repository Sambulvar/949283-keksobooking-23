function randomInteger (min,max) {
  if ((min>=0) && (min<=max)) {
    let intNumber = Math.floor(min + Math.random()*(max + 1 - min));  
    return intNumber;
  };
  
  return console.log('Неверное значение! min>=0, min<=max');
};

console.log(randomInteger(1,3));


function randomNum (min,max,quantity) {
    if ((min>=0) && (min<=max)) {
      let num = (Math.trunc((min + Math.random()*(max - min))*Math.pow(10,quantity)))/Math.pow(10,quantity);  
      return num;
    };
    
    return console.log('Неверное значение! min>=0, min<=max');
  };
  
  console.log(randomNum(100, 105,3));