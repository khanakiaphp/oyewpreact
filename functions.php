<?php
// DISABLE WPML CSS AND JS
define('ICL_DONT_LOAD_NAVIGATION_CSS', true);
define('ICL_DONT_LOAD_LANGUAGE_SELECTOR_CSS', true);
define('ICL_DONT_LOAD_LANGUAGES_JS', true);

require_once( __DIR__ . '/vendor/autoload.php' );
$template_directory = get_template_directory();
// $timber = new Timber\Timber();
// $timber::$locations = $template_directory.'/resources/views';
// $twig = new App\Oye\Twig();

$variables = new App\Oye\Variables();
// $variables->add_var('PAGE_OLDBROWSER', 1, false);
require_once (dirname(__FILE__) . '/includes/post-types.php');
require_once (dirname(__FILE__) . '/includes/sidebars.php');
require_once (dirname(__FILE__) . '/includes/theme-functions.php');
require_once (dirname(__FILE__) . '/includes/shortcodes.php');
require_once (dirname(__FILE__) . '/includes/custom-functions.php');

add_action('wp_head', function() use ($variables){
    $variables->process();
}, 0);


add_action( 'wp_enqueue_scripts', 'oye_scripts' );

$template_directory_url = get_template_directory_uri();
define("DIST_DIR_OYE", $template_directory_url.'/src/docs/dist');

function oye_scripts() {

    global $variables;
    $template_directory_url = get_template_directory_uri();

    $sandboxMode = get_field('sandbox_mode', 'option');

    wp_enqueue_script( "js-vendor", DIST_DIR_OYE."/vendor.js", array(), '');
    wp_enqueue_script( "js-main", DIST_DIR_OYE."/main.js", array(), '');
    // wp_enqueue_script( "js-vendor-runtime", DIST_DIR_OYE."/runtime~vendor.js", array(), '', 1);
    wp_enqueue_script( "js-main-runtime", DIST_DIR_OYE."/runtime~main.js", array(), '');
    wp_enqueue_style( 'css-vendor', DIST_DIR_OYE.'/vendor-style.css', array(), '' );
    wp_enqueue_style( 'css-oystyle', DIST_DIR_OYE.'/custom-style.css', array(), '' );

    
    // if($sandboxMode) {
    //     wp_enqueue_style( 'css-vendor', $template_directory_url.'/dist/vendor.css', array(), '' );
    //     wp_enqueue_style( 'css-main', $template_directory_url.'/dist/main.css', array(), '' );
    //     // wp_enqueue_style( 'style', $template_directory_url.'/style.css', array(), '' );
        
    //     wp_enqueue_script( "js-vendor", $template_directory_url."/dist/vendor.js", array(), '', 1 );
    //     wp_enqueue_script( "js-main", $template_directory_url."/dist/main.js", array(), '', 1 );
    //     // wp_enqueue_script( "js-custom", $template_directory_url."/resources/assets/js/custom.js", array('jquery'), '', false );
    // } else {
    //     wp_enqueue_style( 'css-main', $template_directory_url.'/dist/main.css', array(), '' );
    //     wp_enqueue_script( "js-main", $template_directory_url."/dist/main.js", array(), '', 1);
    // }

    
}

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}


// $moduleTestimonial = new App\OyeTheme\ModuleTestimonial();
