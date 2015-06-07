<?php
class BrowsePlayersController extends Controller {
	protected function __construct() {
	
	}
	
	public function actionIndex() {
		$this->Template->content = "players/index";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
	}
}