<?php
abstract class RestService {
	protected $backend = "127.0.0.1:8008";
	protected $arrCurlOpts = array(
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HTTPHEADER => array()
	);
	
	protected function __construct() {}
	
	/**
	 *
	 * @param string $classname        	
	 * @throws InvalidChildException
	 * @return Controller $Instance
	 */
	public static final function getInstance($classname) {
		if(get_parent_class($classname) == __CLASS__) {
			$Instance = new $classname();
			return $Instance;
		} else {
			throw new InvalidChildException(__CLASS__, $classname);
		}
	}
	protected function request($type = "GET", $request, array $arguments = array()) {
		if(!empty($type) && !empty($request)) {
			$type = strtoupper($type);
			$ch = curl_init();
			
			// Setting cURL options
			if($type == "POST") {
				if(empty($arguments)) {
					throw new EmptyPostRequest();
				}
				
				$this->arrCurlOpts[CURLOPT_URL] = $this->backend;
				$this->arrCurlOpts[CURLOPT_POST] = count($arguments);
				$query = "";
				foreach($arguments as $k => $v) {
					$query .= "{$k}={$v}&";
				}
				rtrim($query, "&");
				$this->arrCurlOpts[CURLOPT_POSTFIELDS] = $query;
			} elseif($type == "GET" && !empty($arguments)) {
				$query = "";
				foreach($arguments as $k => $v) {
					$query .= "{$k}={$v}&";
				}
				rtrim($query, "&");
				$this->arrCurlOpts[CURLOPT_URL] = $this->backend . "?" .$query;
			} elseif($type == "DELETE" || $type = "PUT") {
				if(!empty($arguments)) {
					$query = "";
					foreach($arguments as $k => $v) {
						$query .= "{$k}={$v}&";
					}
					rtrim($query, "&");
					$this->arrCurlOpts[CURLOPT_POSTFIELDS] = $query;
				}
				
				$this->arrCurlOpts[CURLOPT_URL] = $this->backend;
				$this->arrCurlOpts[CURLOPT_CUSTOMREQUEST] = $type;
			}
			
			foreach($this->arrCurlOpts as $opt => $val) {
				curl_setopt($ch, $opt, $val);
			}
			
			// Execute cURL
			$request = curl_exec($ch);
			
			return $request;
		}
	}
	public function get($request, array $arguments = array()) {
		return $this->request("GET", $request, $arguments);
	}
	public function post($request, array $arguments = array()) {
		return $this->request("POST", $request, $arguments);
	}
	public function put($request, array $arguments = array()) {
		return $this->request("PUT", $request, $arguments);
	}
	public function delete($request, array $arguments = array()) {
		return $this->request("DELETE", $request, $arguments);
	}
}