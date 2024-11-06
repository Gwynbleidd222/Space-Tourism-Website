import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hamburger from '../../assets/shared/icon-hamburger.svg'
import data from '../../data.json'
import '../Crew/crew.scss'

const Crew = ({ setIsNavMobileOpen }) => {
	const [selectedCrew, setSelectedCrew] = useState(data.crew[0])
	const [crewImage, setCrewImage] = useState('')
	const [activeCrew, setActiveCrew] = useState(data.crew[0].name)

	const openMobileNav = () => {
		setIsNavMobileOpen(true)
	}

	const handleCrewClick = async crewRole => {
		if (activeCrew === crewRole) return

		const crew = data.crew.find(item => item.name.toLowerCase() === crewRole.toLowerCase())
		setSelectedCrew(crew)

		const image = await import(`../../assets/crew/image-${crew.name.toLowerCase().replace(' ', '-')}.png`)
		setCrewImage(image.default)
		setActiveCrew(crewRole)
	}

	useEffect(() => {
		const loadDefaultImage = async () => {
			const image = await import(`../../assets/crew/image-${selectedCrew.name.toLowerCase().replace(' ', '-')}.png`)
			setCrewImage(image.default)
		}
		loadDefaultImage()
	}, [selectedCrew])

	return (
		<div className='crew'>
			<div className='hero-img-crew'>
				<header className='header'>
					<img className='hamburger' src={Hamburger} alt='Menu Hamburger Nawigacja strony' onClick={openMobileNav} />
				</header>
				<div className='crew-box'>
					<p className='crew-title-mobile'>
						<span>02 </span> meet your crew
					</p>
					<div className='crew-content'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={selectedCrew.name}
								initial={{ opacity: 0.1 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3, ease: 'easeOut' }}
								className='crew-details'>
								<div>
									<p className='crew-title-screen'>
										<span>02 </span> meet your crew
									</p>
									<p className='role'>{selectedCrew.role}</p>
									<p className='name'>{selectedCrew.name}</p>
								</div>
								<p className='bio'>{selectedCrew.bio}</p>
							</motion.div>
						</AnimatePresence>

						<ul className='choose-crew'>
							{data.crew.map(crew => (
								<li
									key={crew.name}
									className={`li-item ${activeCrew === crew.name ? 'active' : ''}`}
									onClick={() => handleCrewClick(crew.name)}></li>
							))}
						</ul>
					</div>

					<AnimatePresence mode='wait'>
						<motion.img
							key={crewImage}
							src={crewImage}
							alt={selectedCrew.name}
							className='crew-image'
							initial={{ opacity: 0.1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeOut' }}
						/>
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default Crew
