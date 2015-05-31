<!Doctype HTML>
<head>
	<?php $this->renderComponent($this->header); ?>
</head>
<body>
	<nav role="navigation">
		<?php $this->renderComponent($this->navigation); ?>
	</nav>
	<section role="content">
		<?php $this->renderContent($this->content); ?>
	</section>
	<section role="footer">
		<?php $this->renderComponent($this->footer); ?>
	</section>
</body>