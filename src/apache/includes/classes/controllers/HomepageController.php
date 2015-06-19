<?php
class HomepageController extends Controller {
	protected function __construct() {
		
	}
	
	protected function setUp() {
	
	}
	
	public function actionIndex($isView = false) {
		$this->Template->content = "homepage/index";
		$this->Template->setTemplateVariable('isView', $isView);
		$this->Template->setTemplateVariable("title", "RPZone | Homepage");
	}
	
	
}