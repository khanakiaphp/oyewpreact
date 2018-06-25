<?php
namespace App\OyeTheme;

class Fields {
    public function __construct ($data, $args=[]) {
        $this->data = $data;
    }

    function make() {
        foreach ($this->data as $key => $value) {
            if($value['acf_fc_layout']=='menu') {
                $html = wp_nav_menu(array(
                    'menu' => 'Primary',
                    'container' => false,
                    'menu_class' => 'nav-menu hidden-xs hidden-sm hidden-md',
                    'echo' => false
                ));

                $this->data[$key]['html'] = $html;
            }

            if($value['acf_fc_layout']=='the_content') {
                if($value['content']) {
                    $content = apply_filters( 'the_content', $value['content'] );
                    $this->data[$key]['html'] = $content;
                }
            }
        }
        return $this->data;
    }

}


?>