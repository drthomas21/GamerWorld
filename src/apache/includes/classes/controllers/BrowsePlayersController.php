<?php
class BrowsePlayersController extends Controller {
	protected function __construct() {
	
	}
	
	protected function setUp() {
		$this->Template->content = "players/index";
		$this->Template->setTemplateVariable("title", "Browse for a player");
		$this->Template->setTemplateVariable('activeTab', 'players');
	}
	
	public function actionIndex() {
		
	}
}