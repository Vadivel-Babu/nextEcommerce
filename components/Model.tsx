//@ts-nocheck
import { Rate, Spin } from "antd";
import { useGetSingleProduct } from "@/services/getSingleProduct";

const Model = ({ open, Id }) => {
  const { data, isLoading } = useGetSingleProduct(Id);

  return (
    <div
      id="backdrop"
      onClick={(e) => {
        if (e.target.id === "backdrop") {
          open(false);
        }
      }}
      className="fixed inset-0 flex items-center justify-center bg-gray-300 p-2 bg-opacity-[10%] backdrop-blur-sm"
    >
      <div className="bg-white rounded-lg p-2">
        <button
          onClick={() => open(false)}
          className="text-md font-bold bg-slate-200 w-8 h-8 rounded-full"
        >
          X
        </button>
        {isLoading ? (
          <div className="w-[300px] h-[200px] sm:w-[500px] flex items-center justify-center gap-2 bg-white">
            <Spin size="large" />
            <p className="text-blue-400">Loading...</p>
          </div>
        ) : (
          <div className="mt-4 flex flex-col md:flex-row gap-4 py-2">
            <img
              src={data?.data.image}
              className="w-[150px] h-[150px] md:w-[300px] object-fit md:h-[300px]"
              alt="img"
            />
            <div>
              <h1 className="text-md sm:text-lg font-semibold  text-gray-500 my-1">
                {data?.data.category}
              </h1>
              <h2 className="text-lg sm:text-xl font-bold max-w-[350px]">
                {data?.data.title}
              </h2>
              <p className="my-1">${data?.data.price}</p>
              <p className="max-w-[500px] text-sm md:text-md">
                {data?.data.description}
              </p>
              <div className="flex items-center gap-1 mt-2">
                <Rate
                  allowHalf
                  disabled
                  defaultValue={data?.data.rating.rate}
                />
                <span>({data?.data.rating.count})</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Model;
