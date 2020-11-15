function reverseString(message){
    // wirte your code here
    message = message.split('').reverse().join('');
    document.write(message);
    return message;
  }