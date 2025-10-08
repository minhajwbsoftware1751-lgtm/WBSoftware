import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const ProductInfo = ({ productData, setProductData, setProductInfoOpen }) => {

     const [showModal, setShowModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        descriptions: "",
        total: "",
    });
    
    const handleInputChange = (index, field, value) => {
        const updated = [...productData];
        updated[index][field] = value;
        setProductData(updated);
    };

   const handleAddProduct = () => {
        if (!newProduct.descriptions || !newProduct.total) return alert("Please fill all fields!");
        setProductData([...productData, newProduct]);
        setNewProduct({ descriptions: "", total: "" });
        setShowModal(false);
    };

    // const handleRemoveRow = (index) => {
    //     const updated = productData.filter((_, i) => i !== index);
    //     setProductData(updated);
    // };

    return (
        <div className="max-w-2xl p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-2xl">Product Information</h1>
                {/* <button onClick={() => setProductInfoOpen(false)}>
                    <RiCloseLargeLine size={24} />
                </button> */}
            </div>

            {productData.map((item, index) => (
                <div key={index} className="">
                    <label className="flex flex-col">
                        Descriptions:
                        <input
                            type="text"
                            className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                            value={item.descriptions}
                            onChange={(e) =>
                                handleInputChange(index, "descriptions", e.target.value)
                            }
                        />
                    </label>

                    <label className="flex flex-col">
                        Total:
                        <input
                            type="number"
                            className="border border-gray-300 p-1 rounded mt-1 text-sm"
                            value={item.total}
                            onChange={(e) =>
                                handleInputChange(index, "total", e.target.value)
                            }
                        />
                    </label>

                </div>
            ))}

            <div className="flex justify-end p-5">
                <button
                    onClick={() => setShowModal(true)}
                    className="w-full justify-center border border-dashed  p-2 rounded-lg text-black flex items-center">
                    <FaPlus size={14} /> <h1 className="pl-2">Add Product Info</h1>
                </button>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-40 z-50">
                    <div className="bg-gray-100 rounded-lg shadow-xl w-96 p-5 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-6 right-3 text-gray-700 hover:text-red-500">
                            <RiCloseLargeLine size={22} />
                        </button>

                        <h2 className="text-xl font-bold mb-4">Add Product</h2>
                        <label className="flex flex-col mb-3">
                            Descriptions:
                            <input
                                type="text"
                                className="border border-gray-300 p-1 rounded mt-1"
                                value={newProduct.descriptions}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, descriptions: e.target.value })
                                }
                            />
                        </label>

                        <label className="flex flex-col mb-3">
                            Total:
                            <input
                                type="number"
                                className="border border-gray-300 p-1 rounded mt-1"
                                value={newProduct.total}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, total: e.target.value })
                                }
                            />
                        </label>

                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-400">
                                Cancel
                            </button>
                            <button
                                onClick={handleAddProduct}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;
