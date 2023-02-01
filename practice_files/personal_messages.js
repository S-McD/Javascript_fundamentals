// EXERCISE

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (arraySet) => {
    return arraySet.map((name) => {
        return 'Hi ' + name + '! 50% off our best candies for you today!'
    });
};

console.log(generateMessages(names));

// CHALLENGE

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

  const generateMoreMessages = (arraySet) => {
    return arraySet.map((record) => {
    return `'Hi ${record.name}! ${record.discount} off our best candies for you today!'`
    });
  };

  console.log(generateMoreMessages(namesAndDiscounts));