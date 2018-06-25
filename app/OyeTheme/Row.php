<?php
namespace App\OyeTheme;

class Row {
    public function __construct ($data, $args=[]) {
        add_action('init', array( $this, '_init'), 0);
        $this->data = $data;
        $this->columns = [];
    }

    function _init() {
       
    }

    function make() {
        foreach ($this->data['columns'] as $key => $value) {
            if($value['fields']) {
                $fields = new Fields($value['fields']);
                // $this->data['columns'][$key]['fields'] = $fields->make();
                $this->columns[] = array_merge($this->data['columns'][$key], array('fields' => $fields->make()));
            } else {
                $this->columns[] = $this->data['columns'][$key];
            }
        }
        return $this->columns;
    }

    function makeMenu($menu) {

    }

   
}


?>