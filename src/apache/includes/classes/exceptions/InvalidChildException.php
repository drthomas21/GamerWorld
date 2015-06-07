<?php
class InvalidChildException extends Exception {
	public function __construct($parent,$child) {
		parent::__construct("The class {$parent} does not have a child name {$child}");
	}
}