import { Products } from "./product";

export const ProductList = ({ iteme, onMove }) => {
    return <div className="p-4 bg-gray-100 rounded shadow">
        <p className="text-lg font-semibold mb-4">
          ProductList 
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {
         iteme.map(elm => <Products key={elm.id} onMove={onMove} {...elm}/>)

          }
          
        </div>
      </div>
  }