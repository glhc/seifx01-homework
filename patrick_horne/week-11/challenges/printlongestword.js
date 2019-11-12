const sample = [
  'BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'blob'
];

function printLongestWord(arr) {
  return new Promise(function (resolve, reject) {
    let longestWord = '';

    arr.forEach(function (word, index) {
      if (word.length > longestWord.length) {
        longestWord = word;
      };

      if (index >= arr.length - 1) {
        console.log('index matches array length');
        resolve(longestWord);
      }
    })
  })
}

printLongestWord(sample).then((data) => {console.log(data)});
