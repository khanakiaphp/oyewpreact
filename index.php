<?php get_header(); ?>

<?php
	$fields = get_fields();
	$content = $fields['content'] ? $fields['content'] : [];
	$components = array();

	$i = 1;
	foreach ($content as $key => $value) {

		if($value['acf_fc_layout']=='navbar') {
			$navHtml = wp_nav_menu(array(
				'menu' => 'Primary',
				'container' => false,
				'menu_class' => 'nav-menu hidden-xs hidden-sm hidden-md',
				'echo' => false
			));
			$components[] = array(
				'id' => $i,
				'type' => $value['acf_fc_layout'],
				'data' => array_merge($value, array('html' => $navHtml)),
			);
		} 
		else if($value['acf_fc_layout']=='article') {
			// $content = apply_filters('the_content',$post->post_content);
			$components[] = array(
				'id' => $i,
				'type' => $value['acf_fc_layout'],
				'data' => $value,
			);
		} 
		else if($value['acf_fc_layout']=='the_content') {
			// $content = apply_filters('the_content',$post->post_content);
			while ( have_posts() ) : the_post();
				$content = get_the_content();
				$content = apply_filters( 'the_content', $content );
			endwhile;
			
			$components[] = array(
				'id' => $i,
				'type' => $value['acf_fc_layout'],
				'data' => array_merge($value, array('html' => $content)),
			);
		} 
		else {
			$components[] = array(
				'id' => $i,
				'type' => $value['acf_fc_layout'],
				'data' => $value
			);
		}
		$i++;
	}

	$data = json_encode(array(
		'components' => $components
	));

	$v8 = new V8Js();
	$react = array();
	$template_directory = get_template_directory_uri();

	$react[] = "var console = {log: function(){}, warn: function(){}, error: print};";
    $react[] = "var global = global || this, self = self || this, window = window || this;";
	$react[] = file_get_contents($template_directory . '/dist/vendor.js');
	$react[] = file_get_contents($template_directory . '/dist/main.js');
	// $react[] = file_get_contents($template_directory . '/dist/runtime~vendor.js');
	$react[] = file_get_contents($template_directory . '/dist/runtime~main.js');
    $react[] = "var React = global.React, ReactDOM = global.ReactDOM, ReactDOMServer = global.ReactDOMServer;";
	$react = implode(";\n", $react);
	try {
		$v8->executeString($react);
	  } catch (V8JsException $e) {
		// blow up spectacularly
		// echo $e->getMessage();
		echo "<pre>"; var_dump($e);
	  }
?>

<div class="main">
	<?php 
		while ( have_posts() ) : the_post();
			// the_content();
			// $content1 = get_the_content();
			// $content1 = apply_filters( 'the_content', $content );
			// var_dump($content1);
		endwhile;
	?>
	<div id="app"><?php 
		$js = sprintf(
			"print(ReactDOMServer.renderToString(React.createElement(%s, %s)))",
			'App',$data);
		$v8->executeString($js);
	?></div>
</div>
<script>

<?php 
	echo "var app =" .sprintf(
		"ReactDOM.hydrate(React.createElement(%s, %s), %s)",
		'App',$data, 'document.getElementById("app")');
?>
</script>
<?php get_footer(); ?>