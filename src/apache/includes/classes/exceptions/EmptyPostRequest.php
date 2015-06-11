<?php
class EmptyPostRequest extends Exception {
	function __construct() {
		parent::__construct("No argument was passed to the POST request");
	}
}