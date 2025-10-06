import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
const ProductInfo = ({ productData, setProductData, setProductInfoOpen }) => {

    return (
        <div className="max-w-2xl mx-auto p-5">

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-4xl">Product Information</h1>
                <button onClick={() => setProductInfoOpen(false)}>
                    <RiCloseLargeLine size={30} />
                </button>
            </div>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Proposal:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={productData.proposal}
                        onChange={(e) =>
                            setProductData({ ...productData, proposal: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Descriptions:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={productData.descriptions}
                        onChange={(e) =>
                            setProductData({ ...productData, descriptions: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Total:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={productData.total}
                        onChange={(e) =>
                            setProductData({ ...productData, total: e.target.value })
                        }
                    />
                </label>
            </div>
        </div>
    );
};
export default ProductInfo;
