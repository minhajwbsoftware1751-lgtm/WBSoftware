import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const ClosingInfo = ({ closingdata, setClosingData, setClosingInfoOpen }) => {

    return (
        <div className="max-w-2xl fixed mx-auto p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-4xl">Closing Calculation</h1>
                <button onClick={() => setClosingInfoOpen(false)}>
                    <RiCloseLargeLine size={30} />
                </button>
            </div>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Total Amount:
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded mt-1 h-10"
                        value={closingdata.totalamount}
                        onChange={(e) =>
                            setClosingData({ ...closingdata, totalamount: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Paid Amount:
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded mt-1 h-10"
                        value={closingdata.paidamount}
                        onChange={(e) =>
                            setClosingData({ ...closingdata, paidamount: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Due Amount:
                    <input
                        type="text"
                        className="border border-gray-300 p-2 rounded mt-1 h-10"
                        value={closingdata.dueamount}
                        onChange={(e) =>
                            setClosingData({ ...closingdata, dueamount: e.target.value })
                        }
                    />
                </label>
            </div>
        </div>
    );
};
export default ClosingInfo;

