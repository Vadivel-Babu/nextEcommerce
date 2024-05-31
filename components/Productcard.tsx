import { Product } from "@/types/product";
import Model from "./Model";
import { useState } from "react";

const Productcard = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState(0);
  return (
    <>
      <div className="p-2 border bg-white rounded-md max-w-[300px] hover:shadow-lg">
        <img
          src={product.image}
          className="w-[300px] object-fit h-[300px]"
          alt="img"
        />
        <h1 className="text-lg font-semibold text-gray-500 my-1">
          {product.category}
        </h1>
        <h2 className="text-xl font-bold">{product.title.slice(0, 20)}</h2>
        <p className="my-1">$ {product.price}</p>
        <button
          onClick={() => {
            setIsOpen(true);
            setProductId(product.id);
          }}
          className="underline text-blue-600 cursor-pointer hover:text-black"
        >
          see more
        </button>
      </div>
      {isOpen && <Model open={setIsOpen} Id={productId} />}
    </>
  );
};

export default Productcard;
