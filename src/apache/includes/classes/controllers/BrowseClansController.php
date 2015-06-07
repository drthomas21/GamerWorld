<?php
class BrowseClansController extends Controller {
	protected function __construct() {
	
	}
	
	public function actionIndex() {
		$this->Template->content = "clans/index";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
	}
}