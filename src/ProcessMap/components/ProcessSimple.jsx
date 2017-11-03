import React from 'react';

const ProcessSimple = ({ item, index }) => [
	<rect
		x={index * 300}
		width="200"
		height="100"
		style={{ strokeWidth: 3, stroke: 'black', fill: 'transparent' }}
		onMouseEnter={() => console.log(item)}
	/>,
	<text x={index * 300 + 10} y="35" style={{ fontSize: "11px"}}>
		{item.title}
	</text>,
	Object.values(item.connectors).map(c => {
		if (c.linkTo === index + 2) {
			return (
				<line
					x1={index * 300 + 200}
					y1="50"
					x2={index * 300 + 300}
					y2="50"
					style={{ strokeWidth: 3, stroke: 'black'}}
					key={c.linkTo}
					marker-end="url(#arrow)"
				/>
			);
		}

		return (
				<path
					style={{ strokeWidth: 3, stroke: 'black', fill: 'transparent'}}
					d={`
						M${index * 300 + 100} 100
						V${100 + index * 25}
						H${c.linkTo * 300 + 75}
						V${100}
						
					`}
					marker-end="url(#arrow)"
				/>
			);
	})
];
// L${c.linkTo * 300 + 100} ${100 + index * 25}
export default ProcessSimple;
