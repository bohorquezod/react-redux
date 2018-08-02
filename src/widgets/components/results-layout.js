import React from 'react'
import './results-layout.css'

const ResultsLayout = props => (
	<div className='ResultsLayout'>
		{
			props.children.size == 1 && 
			<h2>Se encontro {props.children.size} video</h2>
		}
		{
			props.children.size > 1 && 
			<h2>Se encontraron {props.children.size} videos</h2>
		}
		{props.children}
	</div>
);

export default ResultsLayout