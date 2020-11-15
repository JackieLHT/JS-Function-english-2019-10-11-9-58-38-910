function alphabetSort(message){
    // wirte your code here
    message = message.split('').sort().join('');
    document.write(message);
    return message;
  }