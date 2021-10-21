import { FaToilet } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';

const usePropiedades = (propiedades) => {

      const Propiedades = () =>  (
         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 p-5">
            {
               propiedades.map(propiedad => (
                  <div key={propiedad.id} className="border border-gray-700">
                     <img 
                        src={`http://localhost:1337${propiedad.imagen[0].formats.large.url}`} 
                        alt=""
                        className="w-full h-96 object-cover border border-gray-500"
                     />
                     <div className="p-3 bg-gray-200">
                        <h3 className="text-center text-2xl font-bold">{propiedad.nombre}</h3>
                        <ul className="flex justify-between px-10 my-5">
                           <li className="inline-flex items-center">
                              <FaToilet className="mr-2" size='40'/>
                              <span className="font-bold ml-2 text-lg text-gray-600">{propiedad.habitaciones}</span>
                           </li>
                           <li className="inline-flex items-center">
                              <FaBed className="mr-2" size='40'/>
                              <span className="font-bold ml-2 text-lg text-gray-600">{propiedad.wc}</span>
                           </li>
                           <li className="inline-flex items-center">
                              <AiFillCar className="mr-2" size='40'/>
                              <span className="font-bold ml-2 text-lg text-gray-600">{propiedad.estacionamiento}</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               ))
            }
         </div>
      )

      return {
         Propiedades
      }
   
}

export default usePropiedades;