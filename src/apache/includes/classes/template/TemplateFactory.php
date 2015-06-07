<?php
class TemplateFactory {
	public $layout = "main";
	public $header = "header";
	public $footer = "footer";
	public $navigation = "navigation";
	public $content = "404";
	protected $scripts = array();
	protected $styles = array();
	protected $args = array(
			"title" => "Gamer World"
	);
	
	public static function startTemplate() {
		return new Template();
	}
	
	protected function __construct() {
		
	}
	
	public function setTemplateVariable($name,$value) {
		$this->args[$name] = $value;
	}
	
	public function renderStyle($args) {
		extract($args);
		ob_start();
		include TEMPLATE_DIR."/partials/style-remote.inc";
		return ob_get_clean();
	}
	
	public function renderScript($args) {
		extract($args);
		ob_start();
		include TEMPLATE_DIR."/partials/script-remote.inc";
		return ob_get_clean();
	}
	
	public function renderPartial($template) {
		extract($this->args);
		ob_start();
		include TEMPLATE_DIR."/partials/{$template}.inc";
		return ob_get_clean();
	}
	
	public function renderComponent($template) {
		extract($this->args);
		include TEMPLATE_DIR."/components/{$template}.inc";
	}
	
	public function renderContent($template) {
		extract($this->args);
		include TEMPLATE_DIR."/contents/{$template}.inc";
	}
	
	public function renderLayout($template) {
		extract($this->args);
		include TEMPLATE_DIR."/layouts/{$template}.inc";
	}
	
	public function renderView() {
		$this->renderLayout($this->layout);
	}
	
	public function hasStyles() {
		
		return !empty($this->styles);
	}
	
	public function getStyles() {
		return $this->styles;
	}
	
	public function hasHeaderScripts() {
		if(!empty($this->scripts)) {
			foreach($this->scripts as $script) {
				if(!$script['footer']) {
					return true;
				}
			}
		}
		
		return false;
	}
	
	public function getHeaderScripts() {
		$order = array();
		if(!empty($this->scripts)) {
			foreach($this->scripts as $name => $script) {
				if(!$script['footer']) {
					$order = array_merge($order,$this->loadScriptAndDeps($name));
				}
			}
		}
		
		return $order;
	}
	
	public function hasFooterScripts() {
		if(!empty($this->scripts)) {
			foreach($this->scripts as $script) {
				if($script['footer']) {
					return true;
				}
			}
		}
		
		return false;
	}
	
	public function getFooterScripts() {
		$order = array();
		if(!empty($this->scripts)) {
			foreach($this->scripts as $name => $script) {
				if($script['footer']) {
					$order = array_merge($order,$this->loadScriptAndDeps($name));
				}
			}
		}
	
		return $order;
	}
	
	public function getScript($name = "") {
		$scripts = array();
		$Script = $this->scripts[$name];
		if(is_array($Script)) {
			if(!empty($Script['deps'])) {
				foreach($Script['deps'] as $dep) {
					$temp = $this->loadScriptAndDeps($dep);
					$scripts = array_merge($scripts,$temp);
				}
			}
			
			$scripts[] = $Script;
			$this->scripts[$name]['loaded'] = true;
		}
	
		return $scripts;
	}
	
	private function loadScriptAndDeps($name) {
		$scripts = array();
		$Script = $this->scripts[$name];
		if(is_array($Script) && !$Script['loaded']) {
			if(!empty($Script['deps'])) {
				foreach($Script['deps'] as $dep) {
					$temp = $this->loadScriptAndDeps($dep);
					$scripts = array_merge($scripts,$temp);
				}
			}
			
			$scripts[] = $Script;
			$this->scripts[$name]['loaded'] = true;
		}
	
		return $scripts;
	}
}