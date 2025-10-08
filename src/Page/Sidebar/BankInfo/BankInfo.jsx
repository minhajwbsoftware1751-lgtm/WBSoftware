import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const BankInfo = ({ bankData, setBankData, setBankInfoOpen }) => {
    return (
        <div className="max-w-2xl  p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-2xl">Bank Information</h1>
                {/* <button onClick={() => setBankInfoOpen(false)}>
                    <RiCloseLargeLine size={24} />
                </button> */}
            </div>
            <div className="flex flex-col gap-5 text-xl">
                <label className="flex flex-col">
                    Bank Name:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.bankname}
                        onChange={(e) =>
                            setBankData({ ...bankData, bankname: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Branch:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.branch}
                        onChange={(e) =>
                            setBankData({ ...bankData, branch: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Account No:
                    <input
                        type="number"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.accountno}
                        onChange={(e) =>
                            setBankData({ ...bankData, accountno: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Account Name:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.accountname}
                        onChange={(e) =>
                            setBankData({ ...bankData, accountname: e.target.value })
                        }
                    />
                </label>
            </div>

            <h1 className="text-left font-bold text-2xl mt-10 mb-6 border-t-3 pt-5">Transaction Information</h1>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Transation ID:
                    <input
                        type="number"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.transationid}
                        onChange={(e) =>
                            setBankData({ ...bankData, transationid: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Transation From:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.transationfrom}
                        onChange={(e) =>
                            setBankData({ ...bankData, transationfrom: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Transaction Type:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 h-10"
                        value={bankData.transactiontype}
                        onChange={(e) =>
                            setBankData({ ...bankData, transactiontype: e.target.value })
                        }
                    />
                </label>

            </div>
        </div>
    );
};
export default BankInfo;
