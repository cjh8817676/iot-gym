var express = require('express');
var router = express.Router();
var request = require('sync-request');
var read_txt = require('d://JeffTaipeiTech2020//i_GYM//iot-gym//routes//read_txt.js');
var fs = require('fs');

var read_data = fs.readFileSync('D://JeffTaipeiTech2020//i_GYM//read_txt.txt');
var data_str_split = read_txt.split_data(read_data);
var input = read_txt.data_content(data_str_split[0]);

console.log('User_Name : ' + input.User_Name);
console.log('Start_Time : ' + input.Start_Time);
console.log('End_Time : ' + input.End_Time);
console.log('Weight : ' + input.Weight);
console.log('Reps : ' + input.Reps);
console.log('number_of_set : ' + input.number_of_set);
console.log('Average_speed : ' + input.Average_speed);
console.log('Calories : ' + input.Calories);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(read_sensor());
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  creat_DESCRIPTOR_contentInstance(req.body);
  res.send('received data='+req.body.mydata2);
});


function creat_DESCRIPTOR_contentInstance(input){
    headers = {
      'X-M2M-Origin': 'admin:admin',
      'Content-Type': 'application/xml;ty=4'
    }
    //var path = read_sensor_url(AEname)
    //console.log('http://localhost:8080/~'+path)
    xml=
      `<m2m:cin xmlns:m2m="http://www.onem2m.org/xml/protocols">
      <cnf>application/xml</cnf>
      <con>
          &lt;obj&gt;
              &lt;str name=&quot;User_Name&quot; val=&quot;${input.User_Name}&quot;/&gt;
              &lt;str name=&quot;Start_Time&quot; val=&quot;${input.Start_Time}&quot;/&gt;
              &lt;str name=&quot;End_Time&quot; val=&quot;${input.End_Time}&quot;/&gt;
              &lt;str name=&quot;Weight&quot; val=&quot;${input.Weight}&quot;/&gt;
              &lt;str name=&quot;Reps&quot; val=&quot;${input.Reps}&quot;/&gt;
              &lt;str name=&quot;number_of_set&quot; val=&quot;${input.number_of_set}&quot;/&gt;
              &lt;str name=&quot;Average_speed&quot; val=&quot;${input.Average_speed}&quot;/&gt;
              &lt;str name=&quot;Calories&quot; val=&quot;${input.Calories}&quot;/&gt;
              &lt;op name=&quot;getValue&quot; href=&quot;/in-cse/in-name/MY_SENSOR/DATA/la&quot;
           in=&quot;obix:Nil&quot; out=&quot;obix:Nil&quot; is=&quot;retrieve&quot;/&gt;
          &lt;/obj&gt;
      </con>
  </m2m:cin>`
    var res = request('POST', `http://jeff.frp.morrisnet.top/~/mn-cse/mn-name/${input.mydata2}/${input.mydata3}` , {headers:headers , body:xml});
    //var res = request('POST', `http://localhost:8080/~/mn-cse/mn-name/${input.mydata2}/${input.mydata3}` , {headers:headers , body:xml});
    //var res = request('POST', 'http://localhost:8080/~/mn-cse/CAE447774024' , {headers:headers , body:xml});

    console.log(res.getBody('utf-8'));
  }
  module.exports = router;
