<title><?= $title; ?></title>

<?php if($this->hasStyles()): ?>
	<?php foreach($this->getStyles() as $style): ?>
		<?php if(isset($style['src'])): ?>
			<?= $this->renderStyle($style); ?>
		<?php else: ?>
		<?php endif; ?>
	<?php endforeach; ?>
<?php endif; ?>

<?php if($this->hasHeaderScripts()): ?>
	<?php foreach($this->getHeaderScripts() as $script): ?>
		<?php if(isset($script['src'])): ?>
			<?= $this->renderScript($script); ?>
		<?php else: ?>
		<?php endif; ?>
	<?php endforeach; ?>
<?php endif; ?>