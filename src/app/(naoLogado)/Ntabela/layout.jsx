import './style.css';
import Link from '../../../components/Link';
import Pesquisa from '../../../components/Pesquisa';

export default function RootLayout({ children }) {
	return (
		<div>
			{children}
			<nav className="container">
				<img src="lupa.png"></img>
				<div>
					<Pesquisa />
				</div>

				<div>
					<Link nome="Principal" />
					<Link nome="Contato" />
					<Link nome="Sobre" />
					<Link nome="Globo" />
				</div>
			</nav>
		</div>
	);
}
