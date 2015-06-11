<?php
class Template extends TemplateFactory {
	function __construct() {
		$this->addStyle("bootstrap", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css");
		$this->addStyle("bootstrap-theme", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css");
		$this->addStyle("style", "/assets/css/style.css");
		$this->addStyle("font-awesome", "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
		
		$this->addHeaderScript("jquery", "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
		$this->addHeaderScript("angularJS", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js",array("jquery"));
		$this->addHeaderScript("bootstrap", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js",array("jquery"));
	}
	
	public function addHeaderScript($name,$src,array $deps = array()) {
		if(!isset($this->scripts[$name])) {
			$this->scripts[$name] = array(
					"name" => $name, 
					"src" => $src, 
					"deps" => $deps, 
					"loaded" => false, 
					"footer" => false			
			);
		}

	}
	
	public function addFooterScript($name,$src,array $deps = array()) {
		if(!isset($this->scripts[$name])) {
			$this->scripts[$name] = array(
					"name" => $name, 
					"src" => $src, 
					"deps" => $deps, 
					"loaded" => false, 
					"footer" => true			
			);
		}
	}
	
	public function addStyle($name,$src,$media="all") {
		if(!isset($this->styles[$name])) {
			$this->styles[$name] = array(
					"name" => $name,
					"src" => $src,
					"media" => $media
			);
		}
	}
}