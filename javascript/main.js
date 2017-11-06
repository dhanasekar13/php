 // Wait for the dom to be loaded
    document.addEventListener('DOMContentLoaded', function(event) {
 $("#a1").hide();
        // Setup an XMLHttpRequest / AJAX request
       /* var request = new XMLHttpRequest();
        request.open('GET', 'http://www.reddit.com/subreddits.json');
 
        // Setup an "event listener".
        request.onload = function() {
            if (request.status >= 200 && request.status < 400){
                var response = JSON.parse(request.responseText.toString());
                
                response.data.children.forEach(function(el){
           */       

             /*   });
            }
        };
 
        // Send our request
        request.send();*/
    });
 
 
    // Break the list adding code into a function for easier re-use
    function addListEntry() {
  if($('#a1').css('display') == 'none'){ 
   $('#a1').css('display','block'); 
} 
        // Create a new option element.
        var city=document.getElementById("name1").value;
        var optionNode =  document.createElement("option");
 
        // Set the value
        optionNode.value =  city;
 
        // create a text node and append it to the option element
        optionNode.appendChild(document.createTextNode(city));
 
        // Add the optionNode to the datalist
        document.getElementById("hosting-plan").appendChild(optionNode);
getLocationInfo();
 
    }

 function getLocationInfo()
        {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var myObj = this.responseText;
              getAll(this.responseText);
              }
        };
var val1=$("#name1").val();

          var parameter='city='+$("#name1").val();
         
        xmlhttp.open("POST", "info.php", true);

  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameter);
        }

        function getAll(data)
        {
            var whole=JSON.parse(data);
             var type=whole.type;
             var id=whole.id;
 var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var myObj = this.responseText;
              getRestAll(this.responseText);
              }
        };
var val1=$("#name1").val();

          var parameter='entity_id='+id+'&entity_type='+type;
         
        xmlhttp.open("POST", "info1.php", true);

  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameter);
        }


        

      function getRestAll(data)
      {full1=data;
        entire=JSON.parse(data);

        console.log(entire);
        var start=entire.results_start;
        var end=entire.results_shown;
        $(".panel panel-primary").remove();
        for (var i = start; i < end; i++) {
           
        
        var id=entire.restaurants[i].restaurant.id;
        var imgUrl=entire.restaurants[i].restaurant.featured_image;
        var name=entire.restaurants[i].restaurant.name;
        arr= {i:name};
        var rating=entire.restaurants[i].restaurant.user_rating.aggregate_rating;
        var address=entire.restaurants[i].restaurant.location.city;
        var location=entire.restaurants[i].restaurant.location;
        var arr1 = [name, location];
  /*      
var html1;
html1.innerHTMl="<div class='col-lg-3 col-md-6'><div class='panel panel-primary'>  <div class='panel-heading'> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div><div class='col-xs-9 text'>  <div class='huge'>"+name+"</div><div>"+address+"</div> </div>  </div> </div>";
  */                     /* <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>*/
                    
/*
$(".row11").append("<div class='panel panel-primary'>  <div class='panel-heading'> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div>  <div class='huge'>"+name+"</div><div>"+address+"</div><div>"+rating+"</div>   </div> </div><a href='http://localhost/full%20project/rest.php?id="+id+"'>   <div class='panel-footer'>  <span class='pull-left'>View Full details</span>   <span class='pull-right'><i class='fa fa-arrow-circle-right'></i></span> <div class='clearfix'></div></div> </a>");
;*/

$(".row11").append("<div>  <div> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div>  <div class='huge'>"+name+"</div><div>"+address+"</div><div style='float: right;'><button class='btn btn-info' id='bu1' onclick='col3("+id+")' style='background-color: orange;margin-right: 30px;'>View</button></div><div>"+rating+"</div>   </div> </div><a href='http://localhost/full%20project/rest.php?id="+id+"'>   <div class='panel-footer'>  <span class='pull-left'>View Full details</span>   <span class='pull-right'><i class='fa fa-arrow-circle-right'></i></span> <div class='clearfix'></div></div> </a>");
;
/*
$(".row").append("<div class='col-lg-3 col-md-6'><div class='panel panel-primary'>  <div class='panel-heading'> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div><div class='col-xs-9 text'>  <div class='huge'>"+name+"</div><div>"+address+"</div><div>"+rating+"</div> </div>  </div> </div><a href='http://www.google.com'>   <div class='panel-footer'>  <span class='pull-left'>View Details</span>   <span class='pull-right'><i class='fa fa-arrow-circle-right'></i></span> <div class='clearfix'></div></div> </a>");
;
*/

        console.log("the id is "+id+"the image url is -"+imgUrl+"the name of -"+name+"the overall rating is-"+rating+"the address is-"+address);
    }
}
function identify()
        {
var data1=JSON.stringify(entire);
                console.log("this is identify method "+data1['restaurants']);
        }

        function execute()
        {console.log( "the resid"+$("#resid1").val());
            var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var myObj = this.responseText;
              $("#m1").text(this.responseText);
              }
        };
var val1=$("#name1").val();

          var parameter='name='+$("#name").val()+'&resid1='+$("#resid1").val()+'&email='+$("#email").val()+'&phone='+$("#phone").val()+'&message='+$("#msg1").val();
         
        xmlhttp.open("POST", "addComment.php", true);

  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameter);
        }


      /*
      entire.restaurants[0].restaurant.currency
      */
      function col3(id1)
      {   var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            getRestMin( this.responseText);
             
              }
        };

          var parameter='id='+id1;
         
        xmlhttp.open("POST", "restaurant.php", true);

  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(parameter);
      }

       function getRestMin(data)
      {full1=data;
       entire=JSON.parse(data);
        
        var name=entire.name;console.log("the name of the restaurant is"+name);
        var address=entire.location.address;
        var city=entire.location.city;
        var locality=entire.location.locality;
        var zipcode=entire.location.zipcode;
        var end=entire.results_shown;
        var cuisines=entire.cuisines;
        var currency=entire.currency;
        var img=entire.featured_image;
        $(".row122").html('');
       // $("#a1").css('background-image', 'url("' + img + '")','background-size: cover');
        $(".row122").append("<bold><div>  <div> <div class='row'>  <div class='huge'><p> name :"+name+"</p></div><div><p> cuisine :"+cuisines+"</p></div><div><p> address :"+address+"</p></div><div><p> city :"+city+"</p></div> <div><p> location :"+locality+"</p></div><div><p> zipcode :"+zipcode+"</p></div><div><p> currency :"+currency+"</p></div>  </div> </div></div></bold>");
;
        /*for (var i = start; i < end; i++) {
           
        
        var id=entire.restaurants[i].restaurant.id;
        var imgUrl=entire.restaurants[i].restaurant.featured_image;
        var name=entire.restaurants[i].restaurant.name;
        arr= {i:name};
        var rating=entire.restaurants[i].restaurant.user_rating.aggregate_rating;
        var address=entire.restaurants[i].restaurant.location.city;
        var location=entire.restaurants[i].restaurant.location;
        var arr1 = [name, location];*/
  /*      
var html1;
html1.innerHTMl="<div class='col-lg-3 col-md-6'><div class='panel panel-primary'>  <div class='panel-heading'> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div><div class='col-xs-9 text'>  <div class='huge'>"+name+"</div><div>"+address+"</div> </div>  </div> </div>";
  */                     /* <a href="#">
                            <div class="panel-footer">
                                <span class="pull-left">View Details</span>
                                <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
                                <div class="clearfix"></div>
                            </div>
                        </a>*/
                    
/*
$(".row11").append("<div class='panel panel-primary'>  <div class='panel-heading'> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div>  <div class='huge'>"+name+"</div><div>"+address+"</div><div>"+rating+"</div>   </div> </div><a href='http://localhost/full%20project/rest.php?id="+id+"'>   <div class='panel-footer'>  <span class='pull-left'>View Full details</span>   <span class='pull-right'><i class='fa fa-arrow-circle-right'></i></span> <div class='clearfix'></div></div> </a>");
;*/


/*
$(".row").append("<div class='col-lg-3 col-md-6'><div class='panel panel-primary'>  <div class='panel-heading'> <div class='row'> <div class='col-xs-3'><i class='fa fa-comments fa-5x'></i><img src='"+imgUrl+"' alt='Smiley face' height='42' width='70'> </div><div class='col-xs-9 text'>  <div class='huge'>"+name+"</div><div>"+address+"</div><div>"+rating+"</div> </div>  </div> </div><a href='http://www.google.com'>   <div class='panel-footer'>  <span class='pull-left'>View Details</span>   <span class='pull-right'><i class='fa fa-arrow-circle-right'></i></span> <div class='clearfix'></div></div> </a>");
;
*/

       
}