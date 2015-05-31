<?php
class Template extends TemplateFactory {
	public function addHeaderScript($name,$src,array $deps = array()) {
		if(!isset($this->scripts[$name])) {
			$this->scripts[$name] = array(
					"name" => $name, 
					"src" => $src, 
					"deps" => $deps, 
					"loaded" => false, 
					"footer" => false			
			);
		}
	}
	
	public function addFooterScript($name,$src,array $deps = array()) {
		if(!isset($this->scripts[$name])) {
			$this->scripts[$name] = array(
					"name" => $name, 
					"src" => $src, 
					"deps" => $deps, 
					"loaded" => false, 
					"footer" => true			
			);
		}
	}
	
	public function addStyle($name,$src,$media="all") {
		if(!isset($this->styles[$name])) {
			$this->styles[$name] = array(
					"name" => $name,
					"src" => $src,
					"media" => $media
			);
		}
	}
}