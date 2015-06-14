<?php
class HomepageController extends Controller {
	protected function __construct() {
		
	}
	
	protected function setUp() {
	
	}
	
	public function actionIndex() {
		$this->Template->content = "homepage/index";
		$this->Template->setTemplateVariable("title", "RPZone | Homepage");
	}
	
	public function actionLogin($isView = false) {
		$this->Template->content = "homepage/login";
		$this->Template->setTemplateVariable('isView', $isView);
		$this->Template->setTemplateVariable("title", "RPZone | Login");
		$this->Template->addHeaderScript("angularLoginController", "/assets/js/controllers/LoginController.js",array(Template::ANGULAR,"authRestfulService"));
	}
}