<?php
/**
 * List public PHP hooks in Meta Box plugins that are not in the docs.
 *
 * Usage: php scripts/check-hooks.php /path/to/meta-box /path/to/mb-frontend-submission ...
 * Or the whole AIO: php scripts/check-hooks.php /path/to/meta-box-aio/vendor/meta-box/*
 *
 * Skips hooks with dynamic names (e.g. "rwmb_{$field_id}_value"), hooks marked with "@internal" in the 2 lines above,
 * and old hook names marked with "@deprecated" at the end of the line.
 * Exits with code 1 if any hook is missing, so it can run before a release.
 */

// shortcut: checks PHP hooks only, JS events are listed by hand in docs/javascript-api.md.

$dirs = array_slice( $argv, 1 );
if ( empty( $dirs ) ) {
	fwrite( STDERR, "Usage: php scripts/check-hooks.php <plugin-dir> [<plugin-dir>...]\n" );
	exit( 2 );
}

$docs = '';
$it   = new RecursiveIteratorIterator( new RecursiveDirectoryIterator( dirname( __DIR__ ) . '/docs', FilesystemIterator::SKIP_DOTS ) );
foreach ( $it as $file ) {
	if ( preg_match( '/\.mdx?$/', $file->getFilename() ) ) {
		$docs .= file_get_contents( $file->getPathname() );
	}
}

$pattern = '/(?:apply_filters|do_action)(?:_ref_array)?\(\s*[\'"]((?:rwmb|mb|mbb|mbct|mbfs|mbv|mbsp)[_-][^\'"{$]+)[\'"]/';
$missing = [];

foreach ( $dirs as $dir ) {
	$files = new RecursiveIteratorIterator(
		new RecursiveCallbackFilterIterator(
			new RecursiveDirectoryIterator( $dir, FilesystemIterator::SKIP_DOTS ),
			fn( $current ) => ! in_array( $current->getFilename(), [ 'vendor', 'node_modules', '.git', 'tests' ], true )
		)
	);
	foreach ( $files as $file ) {
		if ( $file->getExtension() !== 'php' ) {
			continue;
		}
		$lines = file( $file->getPathname() );
		foreach ( $lines as $i => $line ) {
			if ( ! preg_match_all( $pattern, $line, $matches ) ) {
				continue;
			}
			if ( str_contains( $line, '@deprecated' ) ) {
				continue;
			}
			// One comment can mark 2 hooks in adjacent lines.
			if ( str_contains( implode( '', array_slice( $lines, max( 0, $i - 2 ), min( 2, $i ) ) ), '@internal' ) ) {
				continue;
			}
			foreach ( $matches[1] as $hook ) {
				// Match the whole name: "rwmb_meta" must not match "rwmb_meta_boxes".
				if ( ! preg_match( '/\b' . preg_quote( $hook, '/' ) . '\b/', $docs ) ) {
					$missing[ $hook ] = $file->getPathname() . ':' . ( $i + 1 );
				}
			}
		}
	}
}

ksort( $missing );
foreach ( $missing as $hook => $location ) {
	echo "$hook\t$location\n";
}
echo count( $missing ) . " hook(s) not in docs.\n";
exit( $missing ? 1 : 0 );
