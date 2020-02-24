function rename(oldArray) {
  let newArray = [];
  for (var i = 0; i < oldArray.length; i++) {
    newArray.push('');
    for (var j = 0; j < oldArray[i].length; j++) {
      let letter = oldArray[i][j];
      if (!newArray[i].includes(letter)) newArray[i]+=letter;
    }
  }
  return newArray;
}
