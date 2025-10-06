import { useState } from "react";

const ClosingInfo = ({closingdata, setClosingData}) => {
    
    return (
        <div className="max-w-2xl mx-auto p-5">
            <h1 className="text-center pb-5 border-b font-bold text-4xl mb-6">Product Information</h1>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Total Amount:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
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
                        className="border p-2 rounded mt-1 text-base"
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
                        className="border p-2 rounded mt-1 text-base"
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

