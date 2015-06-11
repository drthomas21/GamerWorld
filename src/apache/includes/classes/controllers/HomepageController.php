<?php
class HomepageController extends Controller {
	protected function __construct() {
		
	}
	
	protected function setUp() {
	
	}
	
	public function actionIndex() {
		$this->Template->content = "homepage/index";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
	}
}