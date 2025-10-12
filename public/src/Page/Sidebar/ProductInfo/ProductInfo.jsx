import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const ProductInfo = ({productData,setProductData,editingProduct,setEditingProduct,editIndex,setEditIndex,}) => {
    const [showModal, setShowModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        descriptions: "",
        total: "",
    });

    useEffect(() => {
        if (editingProduct !== null) {
            setNewProduct(editingProduct);
            setShowModal(true);
        }
    }, [editingProduct]);

    const handleSave = () => {
        if (!newProduct.descriptions || !newProduct.total) {
            alert("Please fill all fields!");
            return;
        }

        if (editIndex !== null) {
            const updated = [...productData];
            updated[editIndex] = newProduct;
            setProductData(updated);
            setEditIndex(null);
            setEditingProduct(null);
        } else {

            setProductData([...productData, newProduct]);
        }

        setNewProduct({ descriptions: "", total: "" });
        setShowModal(false);
    };

    const handleClose = () => {
        setShowModal(false);
        setEditIndex(null);
        setEditingProduct(null);
        setNewProduct({ descriptions: "", total: "" });
    };
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (sectionName) => {
        setOpenSection((prev) => (prev === sectionName ? null : sectionName));
    };

    return (
        <div className="max-w-2xl p-5 pb-0">
    
            {/* Product Info Section */}
            <div>
                <h1
                    onClick={() => toggleSection("product")}
                    className="text-left font-bold text-2xl mb-3 cursor-pointer select-none flex justify-between items-center gap-5"
                >
                    Product Information
                    <span>{openSection === "product" ? <FaArrowUp /> : <FaArrowDown />}</span>
                </h1>

                <div
                    className={`transition-all duration-600 overflow-hidden ${openSection === "product" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    {openSection === "product" && (
                        <div className="flex justify-end p-3 rounded-lg bg-gray-50">
                            <button
                                onClick={() => setShowModal(true)}
                                className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
                            >
                                <FaPlus size={14} />
                                <span className="pl-2">Add Product Info</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>


            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-96 p-5 relative">
                        <button
                            onClick={handleClose}
                            className="absolute top-6 right-3 text-gray-700 hover:text-red-500"
                        >
                            <RiCloseLargeLine size={22} />
                        </button>

                        <h2 className="text-xl font-bold mb-4">
                            {editIndex !== null ? "Edit Product" : "Add Product"}
                        </h2>

                        <label className="flex flex-col mb-3">
                            Descriptions:
                            <input
                                type="text"
                                className="border border-gray-300 p-2 rounded mt-1"
                                value={newProduct.descriptions}
                                onChange={(e) =>
                                    setNewProduct({
                                        ...newProduct,
                                        descriptions: e.target.value,
                                    })
                                }
                            />
                        </label>

                        <label className="flex flex-col mb-3">
                            Total:
                            <input
                                type="number"
                                className="border border-gray-300 p-2 rounded mt-1"
                                value={newProduct.total}
                                onChange={(e) =>
                                    setNewProduct({ ...newProduct, total: e.target.value })
                                }
                            />
                        </label>

                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={handleClose}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                            >
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
