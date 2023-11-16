import React from "react";

const Screenshots = ( { name = '', col1 = [], col2 = [] } ) => {
	return (
		<div className="gallery">
			<div className="gallery__col">
				{
					col1.map( ( [ src, desc ], index ) => (
						<figure key={ src }>
							<img src={ src } alt={ desc } />
							<figcaption>{ desc }</figcaption>
						</figure>
					) )
				}
			</div>
			<div className="gallery__col">
				{
					Array.isArray( col2 )
						? <>
							<figure>
								<img src={ `/settings/${ name }.png` } alt={ `The ${ name.replace( '-', ' ' ) } field settings` } />
								<figcaption>The { name.replace( '-', ' ' ) } field settings</figcaption>
							</figure>
							{
								col2.map( ( [ src, desc ], index ) => (
									<figure key={ src }>
										<img src={ src } alt={ desc } />
										<figcaption>{ desc }</figcaption>
									</figure>
								) )
							}
						</>
						: <figure>
							<img src={ col2 } alt={ `The ${ name.replace( '-', ' ' ) } field settings` } />
							<figcaption>The { name.replace( '-', ' ' ) } field settings</figcaption>
						</figure>
				}
			</div>
		</div>
	);
};

export default Screenshots;