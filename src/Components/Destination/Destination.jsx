import React, { useState, useEffect } from 'react'
import Hamburger from '../../assets/shared/icon-hamburger.svg'
import '../Destination/destination.scss'
import data from '../../data.json'

const Destination = ({ setIsNavMobileOpen }) => {
	const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0])
	const [planetImage, setPlanetImage] = useState('')
	const [activePlanet, setActivePlanet] = useState(data.destinations[0].name)

	const openMobileNav = () => {
		setIsNavMobileOpen(true)
	}

	const handlePlanetClick = async planetName => {
		const planet = data.destinations.find(item => item.name.toLowerCase() === planetName.toLowerCase())
		setSelectedPlanet(planet)

		const image = await import(`../../assets/destination/image-${planetName.toLowerCase()}.png`)
		setPlanetImage(image.default)
		setActivePlanet(planetName)
	}

	useEffect(() => {
		const loadDefaultImage = async () => {
			const image = await import(`../../assets/destination/image-${selectedPlanet.name.toLowerCase()}.png`)
			setPlanetImage(image.default)
		}
		loadDefaultImage()
	}, [selectedPlanet])

	return (
		<div className='destination'>
			<div className='hero-img-destination'>
				<header className='header'>
					<img className='hamburger' src={Hamburger} alt='Menu Hamburger Nawigacja strony' onClick={openMobileNav} />
				</header>

				<p className='destination-title'>
					<span>01 </span>pick your destination
				</p>

				<div className='destination-content'>
					<div className='img-box'>
						<img src={planetImage} alt={selectedPlanet.name} className='images' />
					</div>

					<div className='text-content'>
						<ul className='choose-planet'>
							{data.destinations.map(planet => (
								<li
									key={planet.name}
									className={`li-item ${activePlanet === planet.name ? 'active' : ''}`}
									onClick={() => handlePlanetClick(planet.name)}>
									{planet.name.toLowerCase()}
								</li>
							))}
						</ul>
						<p className='name'>{selectedPlanet.name}</p>
						<p className='description'>{selectedPlanet.description}</p>
						<div className='line'></div>
						<div className='destination-text-boxes'>
							<div className='box-one'>
								<p className='destination-text'>avg. distance</p>
								<p className='distance'>{selectedPlanet.distance}</p>
							</div>
							<div className='box-two'>
								<p className='destination-text'>est. travel time</p>
								<p className='travel'>{selectedPlanet.travel}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Destination
