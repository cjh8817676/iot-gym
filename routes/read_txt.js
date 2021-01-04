var fs = require('fs');  //呼叫副程式"file system"


//非同步讀取資料
/*
fs.readFile('D://JeffTaipeiTech2020//i_GYM//read_txt.txt', "utf8", function(error, data) {
    // 若錯誤 error 為一個物件，則會在這邊觸發內部程式碼，作為簡單的錯誤處理
    
    if (error) {
        console.log('讀取檔案失敗')
        return
    }
    
   
    //console.log(data)
    var data_str;
    data_str = data.toString();  //將型別轉成string
    //console.log(data_str)
    //console.log(typeof(data_str))
    read_data = data_str;
    
    var data_str;
    data_str = data.toString();  //將型別轉成string


    //將object字串分解
    var data_str_split = data_str.split("\n\n");
    //console.log('data_str_split : ' + data_str_split);
    var data_str_split_temp = data_str_split[0];
    data_str_split_2 = data_str_split_temp.split("\n");
    //將object字串分解

    //將分解的字串放進對的位置
    var input = {};  //宣告物件
    input.User_Name = data_str_split_2[0];
    input.Start_Time = data_str_split_2[1];
    input.End_Time = data_str_split_2[2];
    input.Weight = data_str_split_2[3];
    input.Reps = data_str_split_2[4];
    input.number_of_set = data_str_split_2[5];
    input.Average_speed = data_str_split_2[6];
    input.Calories = data_str_split_2[7];
    

    console.log('User_Name : ' + input.User_Name);
    console.log('Start_Time : ' + input.Start_Time);
    console.log('End_Time : ' + input.End_Time);
    console.log('Weight : ' + input.Weight);
    console.log('Reps : ' + input.Reps);
    console.log('number_of_set : ' + input.number_of_set);
    console.log('Average_speed : ' + input.Average_speed);
    console.log('Calories : ' + input.Calories);
    //將分解的字串放進對的位置

});
*/
//非同步讀取資料

//同步讀取資料
var read_data = fs.readFileSync('D://JeffTaipeiTech2020//i_GYM//read_txt.txt');
//console.log('data : ' + read_data);
//同步讀取資料


//分解data
function split_data(read_data)
{
    //console.log(data)
    var data_str;
    data_str = read_data.toString();  //將型別轉成string
    //console.log(data_str)
    //console.log(typeof(data_str))
    read_data = data_str;

    //將object分解
    var data_str_split = data_str.split("\n\n");
    //console.log('data_str_split : ' + data_str_split);
    //將object字串分解

    return data_str_split;
}
//分解data

//分解字串
function data_content(data_str_split)
{
    //將object字串分解
    var data_str_split_temp = data_str_split;
    data_str_split_2 = data_str_split_temp.split("\n");
    //將object字串分解

    //將分解的字串放進對的位置
    var input = {};  //宣告物件
    input.User_Name = data_str_split_2[0];
    input.Start_Time = data_str_split_2[1];
    input.End_Time = data_str_split_2[2];
    input.Weight = data_str_split_2[3];
    input.Reps = data_str_split_2[4];
    input.number_of_set = data_str_split_2[5];
    input.Average_speed = data_str_split_2[6];
    input.Calories = data_str_split_2[7];
    
    /*
    console.log('User_Name : ' + input.User_Name);
    console.log('Start_Time : ' + input.Start_Time);
    console.log('End_Time : ' + input.End_Time);
    console.log('Weight : ' + input.Weight);
    console.log('Reps : ' + input.Reps);
    console.log('number_of_set : ' + input.number_of_set);
    console.log('Average_speed : ' + input.Average_speed);
    console.log('Calories : ' + input.Calories);
    */
    //將分解的字串放進對的位置

    console.log('input' + input);

    return input
}

//debug用
/*
var data_str_split = split_data(read_data);
var input = data_content(data_str_split[0]);
*/
//debug用

/*
console.log('User_Name : ' + input.User_Name);
console.log('Start_Time : ' + input.Start_Time);
console.log('End_Time : ' + input.End_Time);
console.log('Weight : ' + input.Weight);
console.log('Reps : ' + input.Reps);
console.log('number_of_set : ' + input.number_of_set);
console.log('Average_speed : ' + input.Average_speed);
console.log('Calories : ' + input.Calories);
*/
  

//module.exports = router;


module.exports = {
    split_data : split_data,  //匯出後的名字 : 這函式庫的名字
    data_content : data_content
};