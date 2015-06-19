<?php
/**
 * 
 * @property Template $Template
 *
 */
abstract class Controller {
	protected $Template;
	
	/**
	 * 
	 * @param string $classname
	 * @throws InvalidChildException
	 * @return Controller $Instance
	 */
	public static final function getInstance($classname) {
		if(get_parent_class($classname) == __CLASS__) {
			$Instance = new $classname();
			$Instance->Template = TemplateFactory::startTemplate();
			$Instance->setUp();
			return $Instance;
		} else {
			throw new InvalidChildException(__CLASS__, $classname);
		}		
	}
	
	public final function renderPage() {
		$this->Template->renderView();
	}
	
	public final function renderContent() {
		return $this->Template->renderContent($this->Template->content);
	}
	
	abstract public function actionIndex($isView = false);
	//TODO: enforce this
	//abstract public function actionPartialIndex();
	abstract protected function setUp();
	
	protected function __construct() { }
	
	public function actionLogin($isView = false) {
		$this->Template->content = "homepage/login";
		$this->Template->setTemplateVariable('isView', isset($_GET['modal']) ?  true : false);
		$this->Template->setTemplateVariable("title", "RPZone | Login");
	}
	
	
	
}