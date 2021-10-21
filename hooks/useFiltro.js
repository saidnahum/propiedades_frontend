import axios from "axios";
import { useEffect, useState } from "react";

const useFiltro = () => {

   const [categorias, setCategorias] = useState([]);

   const [categoria, setCategoria] = useState('');

   useEffect(() => {
      const obtenerCategorias = async() => {
         const res = await axios.get('http://localhost:1337/categorias');
         setCategorias(res.data);
      }

      obtenerCategorias();
   }, [])

   const FiltroUI = () => (
      <div className="my-5 mt-10">
         <form>
            <select
               onChange={e => setCategoria(e.target.value)}
               value={categoria}
               className="w-1/3 p-2 bg-gray-50 border"
            >
               <option value=""> -- Todos --</option>
               {
                  categorias.map(opcion => (
                     <option value={opcion.id} key={opcion.id}>{opcion.Nombre }</option>
                  ))
               }
            </select>
         </form>
      </div>
   )

   return {
      FiltroUI, categoria
   }
   
};

export default useFiltro;
