<?php
class PlayersProfileController extends Controller {
	protected function __construct() {
	
	}
	
	protected function setUp() {
		$this->Template->content = "players/index";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
		$this->Template->setTemplateVariable('activeTab', 'players');
	}
	
	public function actionIndex() {
		$this->Template->content = "homepage";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
	}
}