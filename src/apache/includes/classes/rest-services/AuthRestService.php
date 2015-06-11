<?php
class AuthRestService extends RestService {
	CONST COOKIE_AUTH_TOKEN_NAME = "rpz_auth_token";
	CONST COOKIE_AUTH_USERNAME = "rpz_auth_user";
	private $request = "auth";
	private $isAuth = false;
	
	public function isLoggedIn() {
		if(isset($_COOKIE[self::COOKIE_AUTH_TOKEN_NAME]) && isset($_COOKIE[self::COOKIE_AUTH_USER]) && !$this->isAuth) {
			$args = array(
					"clientIP" => $_SERVER['REMOTE_ADDR'],
					"username" => $_COOKIE[self::COOKIE_AUTH_USER],
					"token" => $_COOKIE[self::COOKIE_AUTH_TOKEN_NAME]
			);
			
			return false; //TODO: remove 
			
			$json = json_decode($this->get($this->request."/valid",$args));
			if($json->ok) {
				$this->isAuth = $json->data;
			}
		} elseif($this->isAuth) {
			return $this->isAuth;
		}
		
		return false;
	}
	
	
}