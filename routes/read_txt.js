var fs = require('fs');  //呼叫副程式"file system"


fs.readFile('D://JeffTaipeiTech2020//i_GYM//read_txt.txt', function (error, data) {
    // 若錯誤 error 為一個物件，則會在這邊觸發內部程式碼，作為簡單的錯誤處理
    if (error) {
        console.log('讀取檔案失敗')
        return
    }
    //console.log(data)
    var data_str;
    data_str = data.toString();
    var data_str_type = typeof(data_str);

    console.log('data_str : ' + data_str)


    console.log('data_str_type : ' + data_str_type)
    console.log('data : ' + data.toString())  //將檔案以字串讀出
    console.log('data\'length : ' + data.length)  //長度會多兩個字元
    var data_type = typeof(data)
    console.log('data : ' + data_type)
    var string_temp = '123 123';
    var str_temp_type = typeof(string_temp)
    console.log('str_temp : ' + str_temp_type)

    for(var i = 0; i < data.length; i++)
    {
        console.log(data[i])
        string_temp[i] = data[i]
        console.log('i : ' + i);
        string_temp.split(" ")
        //console.log(string_temp[i])
        /*
        if(data[i] == 32)
        {
            break;
        }
        else
        {
            console.log(data[i])
            string_temp[i] = data[i]
        }
        */
    }
    
    console.log('string_temp : ' + string_temp)

  })

  