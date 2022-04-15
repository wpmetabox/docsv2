const path = require( "path" );

module.exports = function( context, options ) {
	return {
		name: 'lightbox',

		getClientModules() {
			return [
				path.resolve( __dirname, "./lightbox" )
			];
		}
	};
};