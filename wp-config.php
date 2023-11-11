<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_udigital' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );
define('FS_METHOD', 'direct');
/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+(2K(ZmLJ:Bf![5Za#&5<EEuXE#lKbbA4Aun9.bC&*dqs`hxju[0dpmLsP/w^qkk' );
define( 'SECURE_AUTH_KEY',  'ORag#=Hh.O-+]sHE|1+bd4C_E[r-vM$0-X8g_7-&UL`QCWZ bi46z<i?,jU!`Urx' );
define( 'LOGGED_IN_KEY',    'JqkPj!HK2_#Lar(@,mlk]P O%+QAyU0Zn$ii:fyb|`+t6Ne]xq?/Yy>kVPxWp Y)' );
define( 'NONCE_KEY',        '2Z!*E]!BpS3sE#Q*SO(Bnc>v0b$Y>Uz~}+y}wDZ_=aZ`x.T~k7ko*8`JkwEuT}~@' );
define( 'AUTH_SALT',        'w^ob7VqjAo,6J?6VE1cQ3-*MD`k3R7!mA7AS7cW1um[vUP9K~EXexZw~~^tbsEP&' );
define( 'SECURE_AUTH_SALT', '(V9puq&MY|fi<wb4sD_ MruA!ODenMuxGRhDoWa io?rs.Q(sPqa?[aF4|&=a_Y5' );
define( 'LOGGED_IN_SALT',   ';:-d.@sqGS?=qaAnP2d}c8=AHfqZD60XR 3.nsa)P7<<YpjF7{6V5Uf{,ssfLTho' );
define( 'NONCE_SALT',       '9Yx[6&<d0> }nzhIQm-u|5&z{z.,J,u/1qfMadvGhNS+zEd>/2wN#O9p#-V*Nlv:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
