<?php
class ProfileController extends Controller {
	protected function __construct() {
	
	}
	
	public function actionIndex() {
		$this->Template->content = "profile/index";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
	}
}