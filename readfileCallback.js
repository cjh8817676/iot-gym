var fs = require('fs'); // 引用檔案物件

var  delayInMilliseconds= 3000; //1 second

fs.readFile('C://Users//jonat//OneDrive//桌面//om2m//my_first_webpage//test.txt', "utf8", function(err, data) {
  console.log("data="+data);
});


setTimeout(function() {
  //your code to be executed after 1 second
  console.log("----readFile End-----"); // 顯示在螢幕上
}, delayInMilliseconds);

