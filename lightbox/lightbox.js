export default ( function() {
	if ( typeof window === 'undefined' ) {
		return null;
	}

	import( 'spotlight.js' );

	const updateImage = img => {
		img.classList.add( 'spotlight' );
		img.setAttribute( 'data-src', img.getAttribute( 'src' ) );
		img.setAttribute( 'data-control', 'close' );
		// img.setAttribute( 'data-title', 'false' );
	}
	const init = () => {
		document.querySelectorAll( '.markdown > p > img' ).forEach( updateImage );
		document.querySelectorAll( 'figure > img' ).forEach( updateImage );
	};

	setTimeout( init, 1000 );

	return {
		onRouteUpdate( { location } ) {
			if ( location && location.hash && location.hash.length ) {
				return;
			}
			setTimeout( init, 1000 );
		},
	};
} )();
