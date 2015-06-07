<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<?php $this->renderComponent($this->header); ?>
	</head>
	<body>
		<?php $this->renderComponent($this->navigation); ?>
		<div class="container-fluid">			
			<section role="content">
				<?php $this->renderContent($this->content); ?>
			</section>
			<section role="footer">
				<?php $this->renderComponent($this->footer); ?>
			</section>
		</div>
	</body>
</html>