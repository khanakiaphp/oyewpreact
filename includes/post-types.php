<?php
    function cptui_register_my_cpts() {
        /**
        * Post Type: Testimonials.
        */
        $labels = array(
            "name" => __( "Testimonials", "oyetheme" ),
            "singular_name" => __( "Testimonial", "oyetheme" ),
        );

        $args = array(
            "label" => __( "Testimonials", "oyetheme" ),
            "labels" => $labels,
            "description" => "",
            "public" => false,
            "publicly_queryable" => false,
            "show_ui" => true,
            "show_in_rest" => false,
            "rest_base" => "",
            "has_archive" => false,
            "show_in_menu" => true,
            "exclude_from_search" => false,
            "capability_type" => "post",
            "map_meta_cap" => true,
            "hierarchical" => false,
            "rewrite" => false,
            "query_var" => true,
            "supports" => array( "title", "editor", "thumbnail" ),
        );

        register_post_type( "testimonial", $args );


        // $labelsProject = array(
        //     "name" => __( "Projects", "oyetheme" ),
        //     "singular_name" => __( "Project", "oyetheme" ),
        // );

        // $argsProject = array(
        //     "label" => __( "Projects", "oyetheme" ),
        //     "labels" => $labelsProject,
        //     "description" => "",
        //     "public" => false,
        //     "publicly_queryable" => false,
        //     "show_ui" => true,
        //     "show_in_rest" => false,
        //     "rest_base" => "",
        //     "has_archive" => false,
        //     "show_in_menu" => true,
        //     "exclude_from_search" => false,
        //     "capability_type" => "post",
        //     "map_meta_cap" => true,
        //     "hierarchical" => false,
        //     "rewrite" => false,
        //     "query_var" => true,
        //     "supports" => array( "title", "editor", "thumbnail" ),
        // );

        // register_post_type( "project", $argsProject );


        $labels = array(
            "name" => __( "Teams", "oyetheme" ),
            "singular_name" => __( "Team", "oyetheme" ),
        );

        $args = array(
            "label" => __( "Teams", "oyetheme" ),
            "labels" => $labels,
            "description" => "",
            "public" => false,
            "publicly_queryable" => false,
            "show_ui" => true,
            "show_in_rest" => false,
            "rest_base" => "",
            "has_archive" => false,
            "show_in_menu" => true,
            "exclude_from_search" => false,
            "capability_type" => "post",
            "map_meta_cap" => true,
            "hierarchical" => false,
            "rewrite" => false,
            "query_var" => true,
            "supports" => array( "title", "editor", "thumbnail" ),
        );

        register_post_type( "team", $args );

        register_taxonomy(
            'team_category',
            'team',
            array(
                'label' => __( 'Team Category' ),
                'public' => true,
                'rewrite' => false,
                'hierarchical' => true,
            )
        );

        $labels = array(
            "name" => __( "Faqs", "oyetheme" ),
            "singular_name" => __( "Faq", "oyetheme" ),
        );

        $args = array(
            "label" => __( "Faqs", "oyetheme" ),
            "labels" => $labels,
            "description" => "",
            "public" => false,
            "publicly_queryable" => false,
            "show_ui" => true,
            "show_in_rest" => false,
            "rest_base" => "",
            "has_archive" => false,
            "show_in_menu" => true,
            "exclude_from_search" => false,
            "capability_type" => "post",
            "map_meta_cap" => true,
            "hierarchical" => false,
            "rewrite" => false,
            "query_var" => true,
            "supports" => array( "title", "editor", "thumbnail" ),
        );

        register_post_type( "faq", $args );

        register_taxonomy(
            'faq_category',
            'faq',
            array(
                'label' => __( 'Faq Category' ),
                'public' => true,
                'rewrite' => false,
                'hierarchical' => true,
            )
        );


        $labels = array(
            "name" => __( "Timelines", "oyetheme" ),
            "singular_name" => __( "Timeline", "oyetheme" ),
        );

        $args = array(
            "label" => __( "Timelines", "oyetheme" ),
            "labels" => $labels,
            "description" => "",
            "public" => false,
            "publicly_queryable" => false,
            "show_ui" => true,
            "show_in_rest" => false,
            "rest_base" => "",
            "has_archive" => false,
            "show_in_menu" => true,
            "exclude_from_search" => false,
            "capability_type" => "post",
            "map_meta_cap" => true,
            "hierarchical" => false,
            "rewrite" => false,
            "query_var" => true,
            "supports" => array( "title", "editor", "thumbnail" ),
        );

        register_post_type( "timeline", $args );
    }

    add_action( 'init', 'cptui_register_my_cpts' );
?>