<?php 
require_once("../includes/autoload.php");

$args = explode("/", preg_replace("/\?.*/","",$_SERVER['REQUEST_URI']));
if(!empty($args)) {
	for($k = 0; $k < count($args); $k++){
		if(empty($args[$k])) {
			array_splice($args, $k,1);
			$k--;
			continue;
		}
	}
}

if(!is_array($args)) {
	$args = array();
}

RequestHandler::parseRequest($args);