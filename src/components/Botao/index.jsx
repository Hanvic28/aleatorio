import './style.css';
export default function Botao(props) {
	return (
		<div>
			<button className="botao" id="buscar">
				{props.nome}
			</button>
		</div>
	);
}
