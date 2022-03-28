import React from "react";

const Screenshots = ( { name = '', images = [] } ) => {
	if ( !Array.isArray( images ) ) {
		images = [ images ];
	}
	const showCount = images.length > 1;

	return (
		<div className="gallery">
			{
				images.map( ( image, index ) => (
					<figure key={ image }>
						<img src={ image } alt={ `The ${ name } field interface` } />
						<figcaption>The { name } field interface { showCount ? index : '' }</figcaption>
					</figure>
				) )
			}
			<figure>
				<img src={ `/settings/${ name }.png` } alt={ `the ${ name } field settings` } />
				<figcaption>The { name } field settings</figcaption>
			</figure>
		</div>
	);
};

export default Screenshots;