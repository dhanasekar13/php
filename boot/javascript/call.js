var type;
var id;

      function info()
        {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var myObj = this.responseText;
              cityInfo(myObj);
              }
        };
          $city=$("#city").val();
        xmlhttp.open("POSt", "info.php", true);
        xmlhttp.send($city);
        }
      
 function cityInfo(data)
  {
  	type=data.type;
    id=data.id;
    console.log("the type is "+data.type+"the id is"+data.id);
  }


   
 