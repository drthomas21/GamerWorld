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
			return $Instance;
		} else {
			throw new InvalidChildException(__CLASS__, $classname);
		}		
	}
	
	public final function renderPage() {
		$this->Template->renderView();
	}
	
	protected function __construct() { }
	
	
	
}