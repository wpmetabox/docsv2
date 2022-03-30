<?php
$dir = dirname( __DIR__ ) . '/extensions';
$des = dirname( __DIR__ ) . '/static/extensions';

$categories = array_diff( scandir( $dir ), ['.', '..', '.DS_Store' ] );

foreach ( $categories as $category ) {
	$fields = array_diff( scandir( "$dir/$category" ), ['.', '..', '.DS_Store' ] );

	foreach ( $fields as $field ) {
		$files = array_diff( scandir( "$dir/$category/$field" ), ['.', '..', '.DS_Store' ] );

		foreach ( $files as $file ) {
			if ( strpos( $file, 'thumbnail' ) === false ) {
				continue;
			}

			$new_name = strtolower( $file );
			$new_name = str_replace( ['mb-', '_thumbnail'], '', $new_name );
			$new_name = str_replace( ' ', '-', $new_name );

			copy( "$dir/$category/$field/$file", "$des/$new_name" );
		}
	}
}

echo "Done\n";