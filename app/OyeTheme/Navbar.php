<?php
namespace App\OyeTheme;

class Navbar {
    public function __construct ($data, $args=[]) {
        add_action('init', array( $this, '_init'), 0);
        $this->data = $data;
        $this->fields = [];
    }

    function _init() {
    //    var_dump('dsf');
    }

    function make() {
        foreach ($this->data['fields'] as $key => $value) {
            if($value['acf_fc_layout']=='menu') {
                // $value = 'sdfds';
                $html = wp_nav_menu(array(
                    'menu' => 'Primary',
                    'container' => false,
                    'menu_class' => 'nav-menu hidden-xs hidden-sm hidden-md',
                    'echo' => false
                ));

                // $this->data['fields'][$key]['html'] = $html;
                $this->fields[] = array_merge($this->data['fields'][$key], array('html' => $html));
            } else {
                $this->fields[] = $this->data['fields'][$key];
            }

        }
        return $this->fields;
    }

    function makeMenu($menu) {

    }

   
}


?>