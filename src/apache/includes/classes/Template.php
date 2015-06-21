<?php
class Template extends TemplateFactory {
	const ANGULAR = "angular";
	const JQUERY = "jquery";
	function __construct() {
		$this->addStyle("bootstrap", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css");
		$this->addStyle("bootstrap-theme", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css");
		$this->addStyle("style", "/assets/css/style.css");
		$this->addStyle("font-awesome", "//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css");
		
		$this->addHeaderScript(self::JQUERY, "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
		$this->addHeaderScript(self::ANGULAR, "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.js",array(self::JQUERY));
		$this->addHeaderScript("angularRoute", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js",array(self::ANGULAR));
		$this->addHeaderScript("angularRoute", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.min.js",array(self::ANGULAR));
		$this->addHeaderScript("angularSanitize", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-sanitize.min.js",array(self::ANGULAR));
		$this->addHeaderScript("angularCookie", "https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-cookies.min.js",array(self::ANGULAR));
		$this->addHeaderScript("angularUI", "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap.min.js",array(self::ANGULAR));
		$this->addHeaderScript("angularUITemplates", "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.min.js",array(self::ANGULAR,"angularUI"));
		$this->addHeaderScript("bootstrap", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js",array(self::JQUERY));
		
		$this->addHeaderScript("angularApp", "/assets/js/app.js",array(self::ANGULAR));
		$this->addHeaderScript("restfulService", "/assets/js/services/RestfulService.js",array(self::ANGULAR,"angularApp"));
		$this->addHeaderScript("locationService", "/assets/js/services/LocationService.js",array(self::ANGULAR,"angularApp"));
		$this->addHeaderScript("authRestfulService", "/assets/js/services/AuthRestfulService.js",array(self::ANGULAR,"restfulService"));
		$this->addHeaderScript("profileRestfulService", "/assets/js/services/ProfileRestfulService.js",array(self::ANGULAR,"restfulService","authRestfulService"));
		
		$this->addHeaderScript("navAuthController", "/assets/js/controllers/NavAuthController.js",array(self::ANGULAR,"authRestfulService"));
		$this->addHeaderScript("loginController", "/assets/js/controllers/LoginController.js",array(self::ANGULAR,"authRestfulService"));
		$this->addHeaderScript("homepageController", "/assets/js/controllers/HomepageController.js",array(self::ANGULAR));
		$this->addHeaderScript("profileController", "/assets/js/controllers/ProfileController.js",array(self::ANGULAR));
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