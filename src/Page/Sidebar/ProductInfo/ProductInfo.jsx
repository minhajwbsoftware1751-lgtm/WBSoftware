import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const ProductInfo = ({ productData, setProductData, setProductInfoOpen }) => {
    
    const handleInputChange = (index, field, value) => {
        const updated = [...productData];
        updated[index][field] = value;
        setProductData(updated);
    };

    const handleAddRow = () => {
        setProductData([
            ...productData,
            { proposal: "", descriptions: "", total: "" },
        ]);
    };

    const handleRemoveRow = (index) => {
        const updated = productData.filter((_, i) => i !== index);
        setProductData(updated);
    };

    return (
        <div className="max-w-2xl mx-auto p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-2xl">Product Information</h1>
                <button onClick={() => setProductInfoOpen(false)}>
                    <RiCloseLargeLine size={24} />
                </button>
            </div>

            {productData.map((item, index) => (
                <div key={index} className="flex flex-col gap-5 text-xl border-b pb-5 mb-5">
                    <label className="flex flex-col">
                        Proposal:
                        <input
                            type="text"
                            className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                            value={item.proposal}
                            onChange={(e) =>
                                handleInputChange(index, "proposal", e.target.value)
                            }
                        />
                    </label>

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

                    {productData.length > 1 && (
                        <button
                            onClick={() => handleRemoveRow(index)}
                            className="text-white rounded-lg bg-red-500 hover:bg-red-300 p-2">
                            Remove
                        </button>
                    )}
                </div>
            ))}

            <div className="flex justify-end p-5">
                <button
                    onClick={handleAddRow}
                    className="bg-green-500 p-2 rounded-lg text-white font-bold flex items-center gap-2 hover:bg-green-600">
                    <FaPlus size={20} /> Add New
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
