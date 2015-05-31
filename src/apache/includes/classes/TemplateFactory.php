<?php
class TemplateFactory {
	public $layout = "main";
	public $header = "header";
	public $footer = "footer";
	public $content = "404";
	protected $scripts = array();
	protected $styles = array();
	
	public static function startTemplate() {
		return new Template();
	}
	
	protected function __construct() {
		
	}
	
	public function renderPartial($template, array $args = array()) {
		extract($args);
		ob_start();
		include TEMPLATE_DIR."/paritals/{$template}.inc";
		return ob_get_clean();
	}
	
	public function renderComponent($template, array $args = array()) {
		extract($args);
		include TEMPLATE_DIR."/compontents/{$template}.inc";
	}
	
	public function renderContent($template, array $args = array()) {
		extract($args);
		include TEMPLATE_DIR."/contents/{$template}.inc";
	}
	
	public function renderLayout($template, array $args = array()) {
		extract($args);
		include TEMPLATE_DIR."/layouts/{$template}.inc";
	}
	
	public function renderView() {
		$this->renderLayout($this->layout);
	}
}