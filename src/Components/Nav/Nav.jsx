import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import CloseNav from '../../assets/shared/icon-close.svg'
import Logo from '../../assets/shared/logo.svg'
import '../Nav/nav.scss'

function Nav({ isNavMobileOpen, setIsNavMobileOpen }) {
	const closeMobileNav = () => {
		setIsNavMobileOpen(false)
	}


	return (
		<>
			<div className='logo-container'>
				<Link to='/'>
					<img className='logo' src={Logo} alt='Logo Space tourism, czarna gwiazda na białym tle' />
				</Link>
			</div>
			<AnimatePresence>
				{isNavMobileOpen && (
					<>
						<motion.div
							key='nav-mobile-overlay'
							className='nav-mobile-overlay'
							initial={{ opacity: 1, x: '100%' }}
							animate={{ x: 1, opacity: 1 }}
							exit={{ opacity: 1, x: '100%' }}
							transition={{ duration: 0.5, ease: 'easeOut' }}
							onClick={() => setIsNavMobileOpen(false)}>
							<nav className='nav-mobile'>
								<img className='nav-close' src={CloseNav} alt='close navigation' onClick={closeMobileNav} />
								<ul className='nav-list'>
									<li className='nav-item'>
										<NavLink to='/'>
											<span className='nav-index'>00</span>Home
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink to='destination'>
											<span className='nav-index'>01</span>destination
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink to='crew'>
											<span className='nav-index'>02</span>crew
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink to='technology'>
											<span className='nav-index'>03</span>technology
										</NavLink>
									</li>
								</ul>
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			<div className='header-container'>
				<nav className='nav-screen'>
					<ul className='nav-list'>
						<li className='nav-item'>
							<NavLink to='/'>
								<span className='nav-index'>00</span>Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='destination'>
								<span className='nav-index'>01</span>destination
							</NavLink>
						</li>
						<li className='nav-item' >
							<NavLink to='crew'>
								<span className='nav-index'>02</span>crew
							</NavLink>
						</li>
						<li className='nav-item' >
							<NavLink to='technology'>
								<span className='nav-index'>03</span>technology
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}

export default Nav
