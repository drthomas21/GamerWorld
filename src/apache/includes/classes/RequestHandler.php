<?php
class RequestHandler {
	public static function parseRequest(array $args = array()) {
		if($args[0] == "view") {
			
		} else {
			if(empty($args) || in_array($args[0], array("home","login","logout","signin","signout","signup","register","settings","account") )) {
				// welcome page
				
				$Controller = Controller::getInstance("HomepageController");
				if(in_array($args[0],"login","signin")) {
					
				} elseif(in_array($args[0],array("signup","register"))) {
					
				} elseif(in_array($args[0],array("logout","signout"))) {
					
				} elseif(in_array($args[0],array("settings","account"))) {
					$Auth = RestService::getInstance("AuthRestService");
					if($Auth->isLoggedIn()) {
						
					} else {
						
					}
					
				} else {
					$Controller->actionIndex();
				}
				
				$Controller->renderPage();
			} elseif(strtolower($args[0]) == "profile") {
				// profile page
				
				$Controller = Controller::getInstance("ProfileController");
				$view = "action" . ucfirst($args[count($args) - 1] != "" ? $args[count($args) - 1] : $args[count($args) - 2]);
				if(method_exists($Controller, $view)) {
					$Controller->$view();
				} else {
					$Controller->actionIndex();
				}
				
				$Controller->renderPage();
			} elseif(strtolower($args[0]) == "clans" || strtolower($args[0]) == "guilds") {
				// clans/guilds browse page
				
				$Controller = Controller::getInstance("BrowseClansController");
				$Controller->actionIndex();
				$Controller->renderPage();
			} elseif(strtolower($args[0]) == "clan" || strtolower($args[0]) == "guild") {
				// clans/guilds profile page
				
				$Controller = Controller::getInstance("ClanProfileController");
				$Controller->actionIndex();
				$Controller->renderPage();
			} elseif(strtolower($args[0]) == "players") {
				// players browse page
				
				$Controller = Controller::getInstance("BrowsePlayersController");
				$Controller->actionIndex();
				$Controller->renderPage();
			} elseif(strtolower($args[0]) == "player") {
				// player profile page
				
				$Controller = Controller::getInstance("PlayerProfileController");
				$Controller->actionIndex();
				$Controller->renderPage();
			} else {
				// 404 page
				$Controller = Controller::getInstance("NotFoundController");
				$Controller->actionIndex();
				$Controller->renderPage();
			}
		}
	}
}