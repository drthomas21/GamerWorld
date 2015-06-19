<?php
class ProfileController extends Controller {
	protected function __construct() {
		
	}
	
	protected function setUp() {
		$this->Template->content = "profile/index";
		$this->Template->setTemplateVariable("title", "Welcome to Gamer World");
		$this->Template->setTemplateVariable("activeTab", 'profile');
	}
	
	public function actionIndex($isView = false) {
		$this->Template->setTemplateVariable('subcontent', 'profile/timeline');
	}
	
	public function actionMessages() {
		$this->Template->setTemplateVariable('subcontent', 'profile/messages');
	}
	
	public function actionFriends() {
		$this->Template->setTemplateVariable('subcontent', 'profile/friends');
	}
	
	public function actionFollowing() {
		$this->Template->setTemplateVariable('subcontent', 'profile/following');
	}
}