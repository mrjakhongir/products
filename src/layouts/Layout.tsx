import { Outlet } from 'react-router-dom'
import Container from '../components/container/Container'
import Header from '../components/header/Header'

const Layout = () => {
	return (
		<Container>
			<Header />
			<Outlet />
		</Container>
	)
}

export default Layout
