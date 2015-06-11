<?php
class BrowseClansController extends Controller {
	private $arrGameSystems = array();
	protected function __construct() {
		$this->arrGameSystems = array(
				"PC #PCMasterRace",
				"Wii U",
				"Wii",
				"Play Station 4",
				"Play Station 3",
				"Play Station 2",
				"Play Station",
				"Xbox One",
				"Xbox 360",
				"Xbox",
		);
		
		sort($this->arrGameSystems);
	}
	
	protected function setUp() {
		$this->Template->content = "clans/index";
		$this->Template->setTemplateVariable("title", "Browser for a clan or guild");
		$this->Template->setTemplateVariable('activeTab', 'clans');
		$this->Template->setTemplateVariable("gameSystems", $this->arrGameSystems);
	}
	
	public function actionIndex() {
		$this->Template->setTemplateVariable("subcontent", "clans/search-clans");
	}
}