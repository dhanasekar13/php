<?php 

// Errors on
error_reporting(E_ALL);
/*
in this function need to provide the query which contains the 
city name using city name this function will return the type and id 

*/
function getLocationInfo($city)
{

$url="locations?query=".$city."";
include_once('api.php');
$data=getUrl($url);
$arr=array("type"=>$data['location_suggestions'][0]['entity_type'],"id"=>$data['location_suggestions'][0]['entity_id']);
return  $arr;
}



function getReview($review)
{
$url="/reviews?res_id=".$review."";
include_once('api.php');
$datafull=getUrl($url);/*
return  $datafull['user_reviews'][0]['review'][review_text];*/
return $datafull;
}

function getRestInfo($resId)
{
	//this function is for getting the details of the particular restaurant
	$url="restaurant?res_id=".$resId."";
include_once('api.php');
$datafull=getUrl($url);

return $datafull;
    
}

function getRestaurantInfo($id,$type)
{
$url="search?entity_id=".$id."&entity_type=".$type."";
include_once('api.php');
$datafull=getUrl($url);
return $datafull;
    
     


/*
Array ( [restaurant] => Array ( [R] => Array ( [res_id] => 18513783 ) [apikey] => 06aafe7d26ede31b64370f54828616e2 [id] => 18513783 [name] => Onesta [url] => https://www.zomato.com/chennai/onesta-semmancheri?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1
 [location] => Array ( [address] => Tech Pump Towers, 2nd Floor, 3/62 Kumaran Nagar, Semmancheri, Semmancheri, Chennai [locality] => Semmancheri [city] => Chennai [city_id] => 7 [latitude] => 12.8749542000 [longitude] => 80.2271863000 [zipcode] => [country_id] => 1 [locality_verbose] => Semmancheri, Chennai ) [switch_to_order_menu] => 0 [cuisines] => Pizza, Italian [average_cost_for_two] => 700 [price_range] => 2 [currency] => Rs. [offers] => Array ( ) [thumb] => https://b.zmtcdn.com/data/res_imagery/18513783_RESTAURANT_7cc9fd271ae530d48af7f662e682cbd6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A [user_rating] => Array ( [aggregate_rating] => 4.5 [rating_text] => Excellent [rating_color] => 3F7E00 [votes] => 1129 ) [photos_url] => https://www.zomato.com/chennai/onesta-semmancheri/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop [menu_url] => https://www.zomato.com/chennai/onesta-semmancheri/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop [featured_image] => https://b.zmtcdn.com/data/res_imagery/18513783_RESTAURANT_7cc9fd271ae530d48af7f662e682cbd6.jpg?output-format=webp [has_online_delivery] => 0 [is_delivering_now] => 0 [deeplink] => zomato://restaurant/18513783 [has_table_booking] => 0 [events_url] => https://www.zomato.com/chennai/onesta-semmancheri/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1 [establishment_types] => Array ( ) ) )

*/

}
?>