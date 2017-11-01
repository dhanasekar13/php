<?php 

// Errors on
	function getUrl($url)
	{
error_reporting(E_ALL);

// Get cURL resource
$curl = curl_init();

// Curl options
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => ['Accept: application/json', 'user-key: 06aafe7d26ede31b64370f54828616e2'],
    CURLOPT_URL =>"https://developers.zomato.com/api/v2.1/$url"
));

// Send the request & save response to $resp
$resp = curl_exec($curl);

// Check for errors if curl_exec fails
if(!curl_exec($curl)){
    die('Error: "' . curl_error($curl) . '" - Code: ' . curl_errno($curl));
}

// Close request to clear up some resources
curl_close($curl);

// Decode json
$jsonZomato = json_decode($resp, true);

return $jsonZomato;
}

?>