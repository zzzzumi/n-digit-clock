var num = 2;
var zero = "000000";
var slicenum = -6;

function changeNum(N){
  num = N;
  
  switch (num){
      case 2:
        zero = "000000";
        slicenum = -6;
      break;
      
    case 8:
        zero = "0";
        slicenum = "-2";
      break;
      
    case 10:
        zero = "0";
        slicenum = "-2";
      break;
      
    case 16:
        zero = "0";
        slicenum = "-2";
      break;
  }
  
  document.getElementById("binary").innerHTML = num + '進数時計';
}

function timeCount(){
  var nowTime = new Date(); //  現在日時を得る
  var nowHour = nowTime.getHours().toString(num); // 時を抜き出す
  var Hour = (zero+nowHour).slice(slicenum);
  var nowMin  = nowTime.getMinutes().toString(num); // 分を抜き出す
  var Min = (zero+nowMin).slice(slicenum);
  var nowSec  = nowTime.getSeconds().toString(num); // 秒を抜き出す
  var Sec = (zero+nowSec).slice(slicenum);
  var msg = Hour + ":" + Min + ":" + Sec;
  document.getElementById("time").innerHTML = msg;
}

setInterval("timeCount()",1000);

