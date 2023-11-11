<?php
function meandudigitaltheme_enqueue_scripts_and_styles()
{
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i', false);

    // Bootstrap and other vendor CSS
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/vendor/bootstrap/css/bootstrap.min.css', array(), '4.1.3');
    wp_enqueue_style('aos', get_template_directory_uri() . '/vendor/aos/aos.css', array(), '1.0.0');
    wp_enqueue_style('bootstrap-icon', get_template_directory_uri() . '/vendor/bootstrap-icons/bootstrap-icons.css', array(), '1.0.0');
    wp_enqueue_style('boxicons', get_template_directory_uri() . '/vendor/boxicons/css/boxicons.min.css', array(), '1.0.0');
    wp_enqueue_style('glightbox', get_template_directory_uri() . '/vendor/glightbox/css/glightbox.min.css', array(), '1.0.0');
    wp_enqueue_style('remixicon', get_template_directory_uri() . '/vendor/remixicon/remixicon.css', array(), '1.0.0');
    wp_enqueue_style('swiper', get_template_directory_uri() . '/vendor/swiper/swiper-bundle.min.css', array(), '1.0.0');

    // Enqueue your main stylesheet
    wp_enqueue_style('main-style', get_template_directory_uri() . '/css/style.css', array(), '1.0.0');

    // Bootstrap Bundle JS
    wp_enqueue_script('bootstrap-bundle', get_template_directory_uri() . '/vendor/bootstrap/js/bootstrap.bundle.min.js', array('jquery'), '4.1.3', true);
    // vendor scripts
    wp_enqueue_script('aos', get_template_directory_uri() . '/vendor/aos/aos.js', array(), '1.0.0', true);
    wp_enqueue_script('glightbox', get_template_directory_uri() . '/vendor/glightbox/js/glightbox.min.js', array(), '1.0.0', true);
    wp_enqueue_script('isotope-layout', get_template_directory_uri() . '/vendor/isotope-layout/isotope.pkgd.min.js', array(), '1.0.0', true);
    wp_enqueue_script('swiper', get_template_directory_uri() . '/vendor/swiper/swiper-bundle.min.js', array(), '1.0.0', true);
    wp_enqueue_script('waypoints', get_template_directory_uri() . '/vendor/waypoints/noframework.waypoints.js', array(), '1.0.0', true);
    wp_enqueue_script('php-email-form', get_template_directory_uri() . '/vendor/php-email-form/validate.js', array(), '1.0.0', true);

    wp_enqueue_script('main-js', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'meandudigitaltheme_enqueue_scripts_and_styles');


function meandudigitaltheme_register_menus()
{
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'meandudigitaltheme'),
    ));
}
add_action('init', 'meandudigitaltheme_register_menus');

class Custom_Walker_Nav_Menu extends Walker_Nav_Menu
{
    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul>\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        $output .= $indent . '<li>';

        $title = apply_filters('the_title', $item->title, $item->ID);
        $url = $item->url;

        $output .= '<a href="' . esc_attr($url) . '">' . esc_html($title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null)
    {
        $output .= "</li>\n";
    }
}

// function meandudigitaltheme_theme_setup() {
//     add_theme_support('custom-logo');
//     // Add other theme supports here, if necessary
// }
// add_action('after_setup_theme', 'meandudigitaltheme_theme_setup');

// go here: /wp-admin/themes.php?theme=meandudigital > customize
function meandudigitaltheme_customize_register($wp_customize)
{
    $wp_customize->add_section('meandudigitaltheme_options', array(
        'title'    => __('Theme Options', 'meandudigitaltheme'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('meandudigitaltheme_logo', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'meandudigitaltheme_logo', array(
        'label'    => __('Logo', 'meandudigitaltheme'),
        'section'  => 'meandudigitaltheme_options',
        'settings' => 'meandudigitaltheme_logo',
    )));
}
add_action('customize_register', 'meandudigitaltheme_customize_register');

function custom_menu()
{
    add_menu_page(
        'About Us',
        'About Us',
        'manage_options',    
        'aboutus-section',    
        'aboutus_page_content', 
        'dashicons-admin-site',   
        6                    
    );
}

add_action('admin_menu', 'custom_menu');

function aboutus_page_content()
{
    $about_us_content = get_option('about_us_content');
?>
    <div class="wrap">
        <h1>About Us</h1>
        <form method="post" action="">
            <?php
                wp_nonce_field('update_about_us_content', 'about_us_nonce');
                wp_editor(html_entity_decode($about_us_content), 'about_us_content', array('textarea_name' => 'about_us_content'));
            ?>
            <p class="submit">
                <input type="submit" value="Save Changes" class="button button-primary">
            </p>
        </form>
    </div>

<?php
}

function save_aboutus() {
    if (isset($_POST['about_us_nonce']) && wp_verify_nonce($_POST['about_us_nonce'], 'update_about_us_content')) {
        if (isset($_POST['about_us_content'])) {
            $about_us_content = wp_kses_post($_POST['about_us_content']);
            update_option('about_us_content', $about_us_content);
        }
    }
}

add_action('admin_init', 'save_aboutus');

function about_us_shortcode() {
    $about_us_content = get_option('about_us_content', 'Default About Us content');
    return do_shortcode(wpautop($about_us_content));
}

add_shortcode('about_us', 'about_us_shortcode');

