import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import './ReceivePostcard.css'

import PostcardDelivered from '../Components/Postcard/PostcardDelivered'

function Overlay() {
    const [visible, setVisible] = useState(true);

    const map = useMap();

    const handleClick = () => {
        const initialZoom = map.getZoom();
        const zoomIn = initialZoom + 3;

        map.flyTo([50, 2], zoomIn, 10);
        setVisible(!visible)
    }

    return (
        <>
            <AnimatePresence>
                {visible && (
                    <motion.div exit = {{opacity: 0 }} transition={{ transition: 'ease-out', duration: "1", delay: "0" }} className="overlay" onClick={handleClick}>
                        <motion.h1 className='youve-got-mail'
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ transition: 'ease-out', duration: "1", delay: "1" }}>
                            You've Got Mail
                        </motion.h1>
                        <motion.h2 className='click-anywhere' initial={{ opacity: 0 }}
                            animate={{ opacity: 100 }} transition={{ transition: 'ease-in-out', duration: "2", delay: "3" }}>
                            Click anywhere to open.
                        </motion.h2>
                    </motion.div>)
                }
            </AnimatePresence>
            <PostcardDelivered/>
        </>
    )

}

function ReceivePostcard() {
    const initialCoords = [34.0703, -118.4469]

    return (
      <>
        <div className='container'>
            <MapContainer center={initialCoords} zoom={13} style={{ height: '100vh', width: '100vw' }}>
                <TileLayer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png' />
                <Overlay />
            </MapContainer>
        </div>
        <PostcardDelivered/>
        </>

    );
}

export default ReceivePostcard;
