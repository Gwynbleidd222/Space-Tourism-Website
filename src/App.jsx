import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/sass/index.scss'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'
import Destination from './Components/Destination/Destination'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'

function App() {
	const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)

	const closeNavMobile = () => {
		setIsNavMobileOpen(false)
	}

	return (
		<Router>
			<Nav setIsNavMobileOpen={setIsNavMobileOpen} closeNavMobile={closeNavMobile} isNavMobileOpen={isNavMobileOpen} />
			<Routes>
				<Route path='/' element={<Home setIsNavMobileOpen={setIsNavMobileOpen} />} />
				<Route path='/destination' element={<Destination setIsNavMobileOpen={setIsNavMobileOpen} />} />
				<Route path='/crew' element={<Crew setIsNavMobileOpen={setIsNavMobileOpen}/> }/>
				<Route path='/technology' element={<Technology setIsNavMobileOpen={setIsNavMobileOpen}/>}/>
			</Routes>
		</Router>
	)
}

export default App
