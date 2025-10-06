import { useState } from "react";

const BankInfo = ({bankData, setBankData}) => {
    return (
       <div className="max-w-2xl mx-auto p-5">
           
            <h1 className="text-center pb-5 border-b font-bold text-4xl mb-6">Bank Information</h1>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Bank Name:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
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
                        className="border p-2 rounded mt-1 text-base"
                        value={bankData. branch}
                        onChange={(e) =>
                            setBankData({ ...bankData,  branch: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Account No:
                     <input
                        type="number"
                        className="border p-2 rounded mt-1 text-base"
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
                        className="border p-2 rounded mt-1 text-base"
                        value={bankData.accountname}
                        onChange={(e) =>
                            setBankData({ ...bankData, accountname: e.target.value })
                        }
                    />
                </label>
            </div>

            <h1 className="text-center font-bold text-4xl mt-10 mb-6 border-b pb-5">Transaction Information</h1>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Transation ID:
                     <input
                        type="number"
                        className="border p-2 rounded mt-1 text-base"
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
                        className="border p-2 rounded mt-1 text-base"
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
                        className="border p-2 rounded mt-1 text-base"
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
