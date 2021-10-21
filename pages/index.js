import usePropiedades from "../hooks/usePropiedades";
import axios from "axios";
import { useEffect, useState } from 'react';
import useFiltro from '../hooks/useFiltro';

export default function Home() {
	
	const [propiedades, setPropiedades] = useState([]);
	const [filtradas, setFiltradas] = useState([]);

	const { Propiedades } = usePropiedades(filtradas);

	const { FiltroUI, categoria } = useFiltro()

	

	// Llamar API
	useEffect(() => {
		if(categoria){
			// Filtrar las propiedades por categoria
			const filtradas = propiedades.filter(propiedad => propiedad.categoria.id === categoria);
			setFiltradas(filtradas);
		} else {
			// Traer todas las categorias
			const obtenerPropiedades = async () => {
				const res = await axios.get('http://localhost:1337/propiedades');
				setPropiedades(res.data);
				setFiltradas(res.data);
			}
			obtenerPropiedades();
		}
	}, [categoria]);
	
	return (
		<div className="container mx-auto">
			<div className="container mx-auto px-6 mt-5 text-center">
				<h1 className="text-2xl font-bold">Nuestras Casas y Departamentos</h1>
				<FiltroUI/>
			</div>
			<Propiedades />
		</div>
	)
}
