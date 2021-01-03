var fs = require('fs');  //呼叫副程式"file system"


fs.readFile('D://JeffTaipeiTech2020//i_GYM//read_txt.txt', function (error, data) {
    // 若錯誤 error 為一個物件，則會在這邊觸發內部程式碼，作為簡單的錯誤處理
    if (error) {
        console.log('讀取檔案失敗')
        return
    }
    //console.log(data)
    var data_str;
    data_str = data.toString();  //將型別轉成string
    //var data_str_type = typeof(data_str);
    //console.log('data_str : ' + data_str)
    //console.log('data_str_type : ' + data_str_type)

    //console.log('data : ' + data.toString())  //將檔案以字串讀出
    //console.log('data\'length : ' + data.length)
    //var data_type = typeof(data)
    //console.log('data : ' + data_type)
    /*
    var string_temp = '123\n456\n77\n\n789787\n445644\n22\n\n';
    var str_split = string_temp.split("\n\n")
    console.log('str_split : ' + str_split)
    console.log(str_split[0]);

    var str_split_2 = str_split[0];
    console.log('str_split_2 : ' + str_split_2);
    var str_split_3 = str_split_2.split("\n");
    console.log('str_split_3 : ' + str_split_3);
   

    console.log(typeof(str_split[0]))
     */

    var data_str_split = data_str.split("\n\n");
    console.log('data_str_split : ' + data_str_split);
    var data_str_split_temp = data_str_split[0];
    data_str_split_2 = data_str_split_temp.split("\n");

    var input = {};
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





  })

  