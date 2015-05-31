<?php
define("TEMPLATE_DIR",__DIR__.'/templates');
function __autoload($class_name) {
	require_once(__DIR__.'/classes/'.$class_name.'.php');
}