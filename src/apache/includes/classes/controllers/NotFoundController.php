<?php
class NotFoundController extends Controller {
	protected function __construct() {
	
	}
	
	protected function setUp() {
	
	}
	
	public function actionIndex() {
		http_response_code(404);
		$this->Template->content = "404";
		$this->Template->setTemplateVariable("title", "Page Not Found");
	}
}