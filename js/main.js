let arrayAdverts = [];       // объявляем массив для исп-ия в пункте #7;
let coordinates;             // объявляем переменную для исп-ия в getLocations(пункт #6);
const typeOfHousing = ['palace', 'flat', 'house', 'bungalow', 'hotel']; // объявляем массив для исп-ия в getOffer;
const checkinTime = ['12:00', '13:00', '14:00'];
const featuresItems = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const pathsToPhotos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// пункт #1. Функция возвращающая случайное целое положительное число;
function randomInteger (min,max) {
  if ((min>=0) && (min<=max)) {
    return Math.floor(min + Math.random()*(max + 1 - min));
  }
  return 'Неверное значение! min>=0, min<=max';
}

// пункт #2. Функция возвращающая случайное число с плавающей точкой;
function randomNum (min,max,quantity) {
  if ((min>=0) && (min<=max)) {
    return (Math.trunc((min + Math.random()*(max - min))*Math.pow(10,quantity)))/Math.pow(10,quantity);
  }
  return 'Неверное значение! min>=0, min<=max';
}
randomInteger(30, 40);
randomNum(100, 105,3);

// пункт #3. Объявляем функцию getAuthor, в которой формируем объект с полем avatar;
function getAuthor(currentNumber) {
  let avatar;
  currentNumber <= 9 ?
    avatar = ('img/avatars/user0' + currentNumber + '.png')
    : avatar = ('img/avatars/user' + currentNumber + '.png');
  return avatar;
}

// пункт #4. Функция возвращающая массив случайной длины с неповторяющимися элементами;
function getRandomArray(lengthArrayFeatures, incomingArray){
  let randomFeaturesArray = [incomingArray[randomInteger(0,incomingArray.length - 1)]];
  let i = 1;
  while (i < lengthArrayFeatures) {
    randomFeaturesArray[i] = incomingArray[randomInteger(0, incomingArray.length - 1)];
    let j = 0;
    let flag = true;
    while ((j < randomFeaturesArray.length - 1) && (flag === true)) {
      if (randomFeaturesArray[i] === randomFeaturesArray[j]) {
        flag = false;
      } else { j++; }
    }
    if (flag === true) { i++; }
  }
  return randomFeaturesArray;
}

// пункт #5. Объявляем функцию getOffer, в которой формируем объект с полями: title, address, price, type,
// rooms, guests, checkin, checkout, features, description, photos;
function getOffer() {
  let itemsOffer = {
    title: 'Заголовок',
    address: 'Адрес: ' + coordinates.lat + ' ' + coordinates.lng,
    price: randomInteger(0, 1000000),
    type: typeOfHousing[randomInteger(0,4)],
    rooms: randomInteger(0, 100),
    guests: randomInteger(0, 100),
    checkin: checkinTime[randomInteger(0, 2)],
    checkout: checkinTime[randomInteger(0, 2)],
    features: getRandomArray(randomInteger(1,6), featuresItems),
    description: 'Описание помещения',
    photos: getRandomArray(randomInteger(1,3), pathsToPhotos),
  };
  return itemsOffer;
}

// пункт #6. Объявляем функцию getLocation, в которой формируем объект с 2-мя полями: lat, lng;
function getLocation() {
  coordinates = {
    lat: randomNum(35.65, 35.7,5),
    lng: randomNum(139.7, 139.8,5),
  };
  return coordinates;
}

// пункт #7 . Формируем массив из объектов с 3-мя полями: author, offer, location;
for (let numberAdvert = 0; numberAdvert < 10; numberAdvert++) {
  arrayAdverts[numberAdvert] = {
    author: getAuthor(numberAdvert + 1),
    location: getLocation(),
    offer: getOffer(),
  };
}

console.log(arrayAdverts);
