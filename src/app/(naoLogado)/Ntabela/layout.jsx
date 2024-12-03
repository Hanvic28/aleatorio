import './style.css';
import Link from '../../../components/Link';
import Pesquisa from '../../../components/Pesquisa';
import Botao from '../../../components/Botao';

export default function RootLayout({ children }) {
	return (
		<div>
			{children}
			<nav className="container">
				<img className="logo" src="/img/ave.png"></img>
				<div>
					<Pesquisa />
				</div>

				<div className="links">
					<Link nome="Principal" />
					<Link nome="Contato" />
					<Link nome="Sobre" />
					<Link nome="Globo" />
				</div>
			</nav>
		</div>
	);
}
