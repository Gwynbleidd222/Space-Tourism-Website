import React, { useState, useEffect } from 'react'
import Hamburger from '../../assets/shared/icon-hamburger.svg'
import data from '../../data.json'
import '../Technology/technology.scss'
import launchVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import launchVehicleLandspace from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportPortLandspace from '../../assets/technology/image-spaceport-landscape.jpg'
import spaceCapsuleLandspace from '../../assets/technology/image-space-capsule-landscape.jpg'

function Technology({ setIsNavMobileOpen }) {
	const [selectedTechnology, setSelectedTechnology] = useState(data.technology[0])
	const [technologyImage, setTechnologyImage] = useState('')
	const [activeTechnology, setActiveTechnology] = useState(data.technology[0].name)
	const [technologyImageTablet, setTechnologyImageTablet] = useState('')

	const openMobileNav = () => {
		setIsNavMobileOpen(true)
	}

	const imageMap = {
		'Launch vehicle': launchVehiclePortrait,
		'Spaceport': spaceportPortrait,
		'Space capsule': spaceCapsulePortrait,
	}

	const imageMapTablet = {
		'Launch vehicle': launchVehicleLandspace,
		'Spaceport': spaceportPortLandspace,
		'Space capsule': spaceCapsuleLandspace,
	}

	const handleTechnologyClick = technology => {
		if (activeTechnology === technology) return

		const technologyItem = data.technology.find(item => item.name.toLowerCase() === technology.toLowerCase())
		setSelectedTechnology(technologyItem)

		const image = imageMap[technologyItem.name]
		setTechnologyImage(image)
		setActiveTechnology(technology)

		const imageTablet = imageMapTablet[technologyItem.name]
		setTechnologyImageTablet(imageTablet)
	}

	useEffect(() => {
		const loadDefaultImage = () => {
			const image = imageMap[selectedTechnology.name]
			setTechnologyImage(image)
		}
		loadDefaultImage()
	}, [selectedTechnology])

	useEffect(() => {
		const loadDefaultImage = () => {
			const imageTablet = imageMapTablet[selectedTechnology.name]
			setTechnologyImageTablet(imageTablet)
		}
		loadDefaultImage()
	}, [selectedTechnology])

	return (
		<div className='technology'>
			<div className='hero-img-technology'>
				<header className='header'>
					<img className='hamburger' src={Hamburger} alt='Menu Hamburger Nawigacja strony' onClick={openMobileNav} />
				</header>

				<p className='technology-title'>
					<span>03 </span>space launch 101
				</p>

				<div className='technology-content'>
					<div className='img-box'>
						<img className='technology-img' src={technologyImage} alt={selectedTechnology.name} />

						<img className='technology-img-tablet' src={technologyImageTablet} alt={selectedTechnology.name} />
					</div>

					<div className='text-box'>
						<ul className='choose-technology'>
							{data.technology.map((technology, index) => (
								<li
									key={technology.name}
									className={`li-item ${activeTechnology === technology.name ? 'active' : ''}`}
									onClick={() => handleTechnologyClick(technology.name)}>
									{index + 1}
								</li>
							))}
						</ul>

						<div className='technology-text'>
							<p className='terminology'>the terminology...</p>
							<p className='name'>{selectedTechnology.name}</p>
							<p className='description'>{selectedTechnology.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Technology
