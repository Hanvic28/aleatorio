import './style.css';

export default function Link(props) {
	return (
		<div>
			<a href="#" className="links">
				{props.nome}
			</a>
		</div>
	);
}
