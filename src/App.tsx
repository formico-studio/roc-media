import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import OurWork from './pages/OurWork'
import OurTeams from './pages/OurTeams'

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/our-work' element={<OurWork />} />
			<Route path='/our-teams' element={<OurTeams />} />
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	)
}
