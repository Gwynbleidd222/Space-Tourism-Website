import React from 'react'
import { Link } from 'react-router-dom'

import Hamburger from '../../assets/shared/icon-hamburger.svg'
import '../Home/home.scss'

function Home({ setIsNavMobileOpen }) {
	const openMobileNav = () => {
		setIsNavMobileOpen(true)
	}

	return (
		<main className='home'>
			<div className='hero-img-home'>
				<div className='hero-img-home-shadow'></div>
				<header className='header'>
					<img className='hamburger' src={Hamburger} alt='Menu Hamburger Nawigacja strony' onClick={openMobileNav} />
				</header>

				<div className='intro'>
					<div className='intro-text'>
						<p className='subheading'>so, you want to travel to</p>
						<div className='main-heading'>space</div>
						<h1 className='description'>
							Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
							experience!
						</h1>
					</div>
					<div>
						<Link to='destination'>
							<button className='explore-btn'>explore</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Home
