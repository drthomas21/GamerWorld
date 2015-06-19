<?php
class RequestHandler {
	public static function parseRequest(array $args = array()) {
		$Controller = null;
		if(!empty($args) && $args[0] == "view") {
			if(empty($args) || in_array($args[1], array("home","login","logout","signin","signout","signup","register",	"settings",	"account"))) {
				// welcome page
				
				$Controller = Controller::getInstance("HomepageController");
				if(in_array($args[1], array("login","signin"))) {
					$Controller->actionLogin(true);
				} elseif(in_array($args[1], array("signup","register"))) {
				} elseif(in_array($args[1], array("logout","signout"))) {
				} elseif(in_array($args[1], array("settings","account"))) {
					
				} else {
					$Controller->actionIndex(true);
				}
			} elseif(strtolower($args[1]) == "profile") {
				// profile page
				
				$Controller = Controller::getInstance("ProfileController");
				$view = "action" . ucfirst($args[count($args) - 1] != "" ? $args[count($args) - 1] : $args[count($args) - 2]);
				if(method_exists($Controller, $view)) {
					$Controller->$view();
				} else {
					$Controller->actionIndex();
				}
			} elseif(strtolower($args[1]) == "clans" || strtolower($args[1]) == "guilds") {
				// clans/guilds browse page
				
				$Controller = Controller::getInstance("BrowseClansController");
				$Controller->actionIndex();
			} elseif(strtolower($args[1]) == "clan" || strtolower($args[1]) == "guild") {
				// clans/guilds profile page
				
				$Controller = Controller::getInstance("ClanProfileController");
				$Controller->actionIndex();
			} elseif(strtolower($args[1]) == "players") {
				// players browse page
				
				$Controller = Controller::getInstance("BrowsePlayersController");
				$Controller->actionIndex();
			} elseif(strtolower($args[1]) == "player") {
				// player profile page
				
				$Controller = Controller::getInstance("PlayerProfileController");
				$Controller->actionIndex();
			} else {
				// 404 page
				$Controller = Controller::getInstance("NotFoundController");
				$Controller->actionIndex();
			}
			echo $Controller->renderContent();
			return;
		} else {
			$Controller = Controller::getInstance("HomepageController");
			$Controller->actionIndex();
			
			$Controller->renderPage();
		}
	}
}