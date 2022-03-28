<?php
$dir = dirname( __DIR__ ) . '/images';
$des = dirname( __DIR__ ) . '/static/settings';

$categories = array_diff( scandir( $dir ), ['.', '..' ] );

foreach ( $categories as $category ) {
	$fields = array_diff( scandir( "$dir/$category" ), ['.', '..' ] );

	foreach ( $fields as $field ) {
		$files = array_diff( scandir( "$dir/$category/$field" ), ['.', '..' ] );

		foreach ( $files as $file ) {
			if ( strpos( $file, 'settings' ) === false ) {
				continue;
			}

			$new_name = str_replace( '_settings', '', $file );
			$new_name = str_replace( ' ', '-', $new_name );

			copy( "$dir/$category/$field/$file", "$des/$new_name" );
		}
	}
}

echo "Done\n";