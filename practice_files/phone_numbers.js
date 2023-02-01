const checkLength = (number) => {
    if (number.length <= 10) {
        return true
    } else {
        return false
    }
};

const filterLongNumbers = (numbers) => {
    return numbers.filter(checkLength);
};

const phoneNumbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];

console.log(filterLongNumbers(phoneNumbers));