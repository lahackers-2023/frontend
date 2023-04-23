import { memo, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// import { Card } from '..';
import CenterController  from './CenterController';
import './PostcardReceivedMap.css';
// import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css'

const MIDDLE_OF_WORLD_COORDS = [40.4637, -3.7492];

const Map = ({
	className,
	children = () => {},
	center,
	theme,
	hasCenterButton = true,
	...options
}) => {
	const [position, setPosition] = useState(null);
	return (
			<MapContainer
				className='container'
				center={center ?? MIDDLE_OF_WORLD_COORDS}
				minZoom={2.5}
				attributionControl={false}
                zoom={4}
				// {...options}
			>
				{/* {center && <CenterController center={center} />} */}
				{/* {children} */}
				{/* {theme === 'dark' && (
					<TileLayer url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' />
				)}
				{theme === 'light' && (
					<TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />
				)} */}

			</MapContainer>
            
	);
};

export default memo(Map);