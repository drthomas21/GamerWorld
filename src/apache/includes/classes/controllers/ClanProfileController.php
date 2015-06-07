<?php
class ClanProfileController extends Controller {
	protected function __construct() {
	
	}
	
	public function actionIndex() {
		$this->Template->content = "homepage";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
	}
}