<!DOCTYPE html>
<html ng-app="rpzone" ng-cloak>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php $this->renderComponent($this->header); ?>
	</head>
	<body>
		<?php $this->renderComponent($this->navigation); ?>
		<div class="container-fluid">			
			<section role="content" class="col-lg-12">
				<?php $this->renderContent($this->content); ?>
			</section>
			<section role="footer">
				<?php $this->renderComponent($this->footer); ?>
			</section>
		</div>
	</body>
</html>