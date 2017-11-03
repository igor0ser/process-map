import React from 'react';
import ProcessSimple from './components/ProcessSimple';
import { camelCase, capitalize } from 'lodash';

const components = { ProcessSimple };

const ProcessMap = ({ items }) => (
	<svg width="2000" height="500">
		<defs>
			<marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
				<path d="M0,0 L0,6 L9,3 z" fill="#f00" />
			</marker>
		</defs>
		{items.map((item, index) => {
			const type = capitalize(camelCase(item.type));

			if (!Object.keys(components).includes(type))
				return <ProcessSimple item={item} index={index} key={index} />;

			const ItemComponent = components[type];
			return <ItemComponent item={item} index={index} key={index} />
		})}
	</svg>
);

export default ProcessMap;
