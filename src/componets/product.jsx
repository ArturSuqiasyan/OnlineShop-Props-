export const Products =({id,title,price,category,photo,onMove })=>{
    return <div>
<img
                src={photo}
                 alt=""

                className="w-full h-48 object-cover rounded"
              />
              <p className="mt-2 text-gray-800 text-sm font-semibold">
                {price} USD
              </p>
              <p>{title}</p>
              <p>{category}</p>
              <button  onClick={()=> onMove(id)} className="mt-4 bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-600">
                Move
              </button>

    </div>
}