function countWords(message){
    // wirte your code here
    var re = /[^A-Za-z0-9 ]/g;
    message = message.toLowerCase().replace(re, '');
    var count = 0;
    count = message.split(' ').length;
    // document.write(count);
    return count;
  }