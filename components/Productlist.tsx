"use client";
import { useGetAllProducts } from "@/services/getAllProducts";
import Productcard from "./Productcard";
import { Pagination, Spin } from "antd";
import { useState } from "react";
import { Product } from "@/types/product";
import { toast } from "react-toastify";

const Productlist = () => {
  const { data, isLoading, isError, error } = useGetAllProducts();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  if (isError) {
    toast.error(error?.message);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 ">
      <h1 className="text-2xl sm:text-3xl font-semibold">Products</h1>
      <input
        type="text"
        className="border-2 border-black py-2 px-3 rounded-lg "
        placeholder="Search Product By name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isLoading ? (
        <>
          <Spin size="large" className="mt-20" />
          <p className="text-blue-400 text-xl font-semibold">Loading...</p>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-1">
            {search.trim().length !== 0
              ? data?.data
                  .filter((product: Product) =>
                    product.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((product: Product) => (
                    <Productcard key={product.id} product={product} />
                  ))
              : data?.data
                  .slice((page - 1) * 10, page * 10)
                  .map((product: Product) => (
                    <Productcard key={product.id} product={product} />
                  ))}
          </div>
          {search.trim().length === 0 && (
            <Pagination
              defaultCurrent={page}
              total={data?.data.length}
              onChange={(val) => setPage(val)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Productlist;
