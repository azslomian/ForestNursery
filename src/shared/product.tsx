import * as React from "react";

type ProductProps = { displayName: string, price: number, imageUrl: string};

export const Product = ({ displayName, price, imageUrl}: ProductProps) => (
    <div className='product'>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
            <div style={{ backgroundImage: `url(${imageUrl})` }}
              className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
            </div>
            <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">{displayName}</div>
                <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                <h1 className="text-gray-800 font-bold ">${price.toFixed(2)}</h1>
                <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">Add to cart</button>
                </div>
            </div>
      </div>
    </div>
  );