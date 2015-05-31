<title><?= $title; ?></title>

<?php if(!empty($this->styles)): ?>
	<?php foreach($this->styles as $style): ?>
		<?php if(isset($style['src'])): ?>
			<?= $this->renderPartial("style-remote",$style); ?>
		<?php else: ?>
			<?= $this->renderPartial("style",$style); ?>
		<?php endif; ?>
	<?php endforeach; ?>
<?php endif; ?>