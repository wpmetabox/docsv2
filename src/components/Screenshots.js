import React from "react";

const Screenshots = ( { name = '', col1 = [], col2 = [] } ) => {
	if ( !Array.isArray( col1 ) ) {
		col1 = [ col1 ];
	}
	if ( !Array.isArray( col2 ) ) {
		col2 = [ col2 ];
	}

	const showCount = col1.length + col2.length > 1;
	const desc = name.replace( '-', ' ' );

	return (
		<div className="gallery">
			<div className="gallery_col1">
				{
					col1.map( ( [src, desc], index ) => (
						<figure key={ src }>
							<img src={ src } alt={ desc } />
							<figcaption>{ desc }</figcaption>
						</figure>
					) )
				}
			</div>
			<div className="gallery_col2">
				<figure>
					<img src={ `/settings/${ name }.png` } alt={ `the ${ name } field settings` } />
					<figcaption>The { desc } field settings</figcaption>
				</figure>
				{
					col2.map( ( [src, desc], index ) => (
						<figure key={ src }>
							<img src={ src } alt={ desc } />
							<figcaption>{ desc }</figcaption>
						</figure>
					) )
				}
			</div>
		</div>
	);
};

export default Screenshots;