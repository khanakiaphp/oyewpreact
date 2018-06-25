<?php get_header(); ?>

<?php
	function debug_to_console( $data ) {
		echo "<script>console.log(" . json_encode($data) . ");</script>";
	}

	$navs = get_field('navs', 'option');

	// echo '<pre>';
	$fields = get_fields();
	$content = $fields['content'] ? $fields['content'] : [];
	$components = array();

	$i = 1;
	foreach ($content as $key => $value) {
		if($value['acf_fc_layout']=='row') {
			// debug_to_console($value);
			$row = new App\OyeTheme\Row($value);
			$data = $row->make();
			debug_to_console($data);
			$components[] = array_merge($value, array(
				'columns' => $data,
			));
		}

		else if($value['acf_fc_layout']=='navbar_custom') {
			$navbar = new App\OyeTheme\Navbar($value);
			$data = $navbar->make();
			$components[] = array_merge($value, array(
				'acf_fc_layout' => 'navbar',
				'fields' => $data,
			));	
		}

		else if($value['acf_fc_layout']=='navbar') {
			$navs = get_field('navs', 'option');
			if ($value['id']) {
				foreach ($navs as $key => $nav) {
					if($nav['id']==$value['id']) {
						$navbar = new App\OyeTheme\Navbar($nav);
						$data = $navbar->make();
						$components[] = array_merge($value, array(
							'fields' => $data,
						));	
					}
				}
			} else {
				if(isset($navs[0])) {
					$navbar = new App\OyeTheme\Navbar($navs[0]);
					$data = $navbar->make();
					$components[] = array_merge($navs[0], array(
						'fields' => $data,
					));	
				}
			}
		}

		else if($value['acf_fc_layout']=='footer') {
			
			$footers = get_field('footers', 'option');
			// debug_to_console($footers);
			if ($value['id']) {
				foreach ($footers as $key => $footer) {
					if($footer['id']==$value['id']) {
						$row = new App\OyeTheme\Row($footer);
						$data = $row->make();
						$components[] = array_merge($footer, array(
							'columns' => $data,
						));
					}
				}
			} else {
				if(isset($footers[0])) {
					$row = new App\OyeTheme\Row($footers[0]);
					$data = $row->make();
					$components[] = array_merge($footers[0], array(
						'columns' => $data,
					));
				}
			}
		} 

		else if($value['acf_fc_layout']=='article') {
			$content = apply_filters( 'the_content', $value['content'] );
			$components[] = array_merge($value, array(
				'html' => $content
			));		
		} 

		else if($value['acf_fc_layout']=='the_content') {
			// $content = apply_filters('the_content',$post->post_content);
			while ( have_posts() ) : the_post();
				$content = get_the_content();
				$content = apply_filters( 'the_content', $content );
			endwhile;	
			$components[] = array_merge($value, array(
				'html' => $content
			));		
		}

		else {
			$components[] = array(
				'id' => $i,
				'acf_fc_layout' => $value['acf_fc_layout'],
				'data' => $value
			);
		}

		$i++;
	}

	$data = json_encode(array(
		'components' => $components
	));

	debug_to_console($components);

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