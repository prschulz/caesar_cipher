var cipher = {
  encrypt: function (message, key) {
    message = message.split(' ').join('').toLowerCase(); //remove spaces and make lowercase
    messageArr = message.split('');  // make array
    var encryptedMessage = [];  //empty array for encrypted message

    messageArr.forEach(function(c){
      encryptedMessage.push(nextChar(c, key)); //push each letter into array after calling nextChar
    });

    return encryptedMessage.join('');  //join and return encrypted message
  },

  decrypt: function (message, key) {
    message = message.split(' ').join('').toLowerCase(); //remove spaces and make lowercase
    messageArr = message.split('');  //make array
    var decryptedMessage = [];  //empty array for decrypted message

    messageArr.forEach(function(c){
      decryptedMessage.push(lastChar(c, key));  //push each letter into array after calling lastChar
    });

    return decryptedMessage.join('');  //join and return decrypted message
  },

};

function nextChar(c, key) {
    return String.fromCharCode(c.charCodeAt(0) + key); //add key to character
}

function lastChar(c, key) {
  return String.fromCharCode(c.charCodeAt(0)- key); //subtract key from character
}