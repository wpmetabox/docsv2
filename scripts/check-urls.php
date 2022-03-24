<?php
$links = [
	"",
	"installation",
	"updates",
	"quick-start",
	"creating-post-types",
	"creating-taxonomies",
	"creating-meta-boxes",
	"field-settings",
	"displaying-fields",
	"shortcode",
	"cloning-fields",
	"validation",
	"sanitization",
	"custom-attributes",
	"integration",
	"database",
	"custom-field-type",
	"html5-input-types",
	"composer",
	"post-type-generator",
	"taxonomy-generator",
	"online-generator",
	"fields/autocomplete",
	"fields/background",
	"fields/button",
	"fields/button-group",
	"fields/checkbox",
	"fields/checkbox-list",
	"fields/color",
	"fields/custom-html",
	"fields/date",
	"fields/datetime",
	"fields/divider",
	"fields/fieldset-text",
	"fields/file",
	"fields/file-advanced",
	"fields/file-input",
	"fields/file-upload",
	"fields/map",
	"fields/heading",
	"fields/hidden",
	"fields/image",
	"fields/image-advanced",
	"fields/image-select",
	"fields/image-upload",
	"fields/key-value",
	"fields/number",
	"fields/oembed",
	"fields/osm",
	"fields/password",
	"fields/post",
	"fields/radio",
	"fields/range",
	"fields/select",
	"fields/select-advanced",
	"fields/sidebar",
	"fields/single-image",
	"fields/slider",
	"fields/switch",
	"fields/taxonomy",
	"fields/taxonomy-advanced",
	"fields/text",
	"fields/text-list",
	"fields/textarea",
	"fields/time",
	"fields/user",
	"fields/video",
	"fields/wysiwyg",
	"extensions/mb-acf-migration",
	"extensions/mb-admin-columns",
	"extensions/mb-blocks",
	"extensions/mb-custom-post-type",
	"extensions/mb-custom-table",
	"extensions/mb-frontend-submission",
	"extensions/mb-rank-math",
	"extensions/mb-relationships",
	"extensions/mb-rest-api",
	"extensions/mb-revision",
	"extensions/mb-settings-page",
	"extensions/mb-term-meta",
	"extensions/mb-user-meta",
	"extensions/mb-user-profile",
	"extensions/mb-views",
	"extensions/meta-box-builder",
	"extensions/meta-box-columns",
	"extensions/meta-box-conditional-logic",
	"extensions/meta-box-yoast-seo",
	"extensions/meta-box-geolocation",
	"extensions/meta-box-group",
	"extensions/meta-box-include-exclude",
	"extensions/meta-box-show-hide",
	"extensions/meta-box-tabs",
	"extensions/meta-box-template",
	"extensions/meta-box-text-limiter",
	"extensions/meta-box-tooltip",
	"extensions/meta-box-aio",
	"extensions/composer",
	"mb-favorite-posts",
	"mb-testimonials",
	"actions",
	"filters",
	"rwmb-field-class",
	"rwmb-meta",
	"rwmb-set-meta",
	"rwmb-the-value",
	"rwmb-get-value",
	"rwmb-get-object-fields",
	"rwmb-get-field-settings",
	"rwmb-get-registry",
	"edit-meta-boxes",
	"custom-select-checkbox-tree",
	"include-exclude-show-hide-conditional-logic",
	"using-two-date-formats",
	"hide-tabs-with-conditional-logic",
	"create-columns-in-meta-box-builder",
	"save-wysiwyg-content-post-content",
	"using-custom-html-to-output-anything",
	"compatible-themes",
	"compatible-plugins",
	"compatible-hostings"
];

$ch = curl_init();
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt( $ch, CURLOPT_HEADER, 1 );
curl_setopt( $ch, CURLOPT_NOBODY, 1 );
// curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1 );

// Able to pass host from the command line: php scripts/check-urls.php http://127.0.0.1:8989
$domain = $argv[1] ?? 'http://localhost:3000';

$count = 0;
foreach ( $links as $link ) {
	$url = $link ? "$domain/$link/" : $domain;
	curl_setopt( $ch, CURLOPT_URL, $url );
	$output = curl_exec( $ch );
	$http_code = curl_getinfo( $ch, CURLINFO_HTTP_CODE );

	if ( $http_code == 301 ) {
		$redirect_url = curl_getinfo( $ch, CURLINFO_REDIRECT_URL );

		echo $http_code, ": $url => $redirect_url\n";
		$count++;
	} elseif ( $http_code != 200 ) {
		echo $http_code, ": $url \n";
		$count++;
	}
}

echo "\nThere are $count URLs error\n\n";

curl_close($ch);