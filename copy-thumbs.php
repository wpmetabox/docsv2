<?php
$dir = __DIR__ . '/images';
$des = __DIR__ . '/static/thumbs';

$categories = array_diff( scandir( $dir ), ['.', '..' ] );

foreach ( $categories as $category ) {
	$fields = array_diff( scandir( "$dir/$category" ), ['.', '..' ] );

	foreach ( $fields as $field ) {
		$files = array_diff( scandir( "$dir/$category/$field" ), ['.', '..' ] );

		foreach ( $files as $file ) {
			if ( strpos( $file, 'thumbnail' ) === false ) {
				continue;
			}

			$new_name = str_replace( '_thumbnail', '', $file );
			$new_name = str_replace( ' ', '-', $new_name );

			copy( "$dir/$category/$field/$file", "$des/$new_name" );
		}
	}
}

echo "Done\n";