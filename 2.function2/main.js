function palindrome(message){
    // wirte your code here
    var re = /[^A-Za-z0-9]/g;
    message = message.toLowerCase().replace(re, '');
    for(var i = 0; i < message.length / 2; i++)
    {
        if(message[i] != message[message.length - i - 1]) {
            return false;
        }
    }
    return true;
  }