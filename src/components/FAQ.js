import Details from "@theme/Details";
import slugger from "github-slugger";
import React from "react";

const FAQ = ( { question, children } ) => {
	const slug = slugger.slug( question );
	return (
		<Details id={ slug } summary={ <summary>{ question }</summary> }>
			{ children }
			<a href={ `#${ slug }` } className="faqLink"># Link to this question</a>
		</Details>
	);
};

export default FAQ;