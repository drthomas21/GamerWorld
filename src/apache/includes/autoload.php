<?php
define("TEMPLATE_DIR",__DIR__.'/templates');
$files = scandir(__DIR__.'/classes');
foreach($files as $file) {
	if(stripos($file,".php") === strlen($file)-4) {
		require_once(__DIR__."/classes/{$file}");
	}
}
function __autoload($class_name) {
	if(stripos($class_name,"controller") !== false) {
		require_once(__DIR__.'/classes/controllers/'.$class_name.'.php');
	} elseif(stripos($class_name,"exception") !== false) {
		require_once(__DIR__.'/classes/exceptions/'.$class_name.'.php');
	} else {
		require_once(__DIR__.'/classes/'.$class_name.'.php');
	}
}