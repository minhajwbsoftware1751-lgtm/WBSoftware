import { useState } from "react";

const PaymentInfo = ({paymentData, setPaymentData}) => {
    
    return (
       <div className="max-w-2xl mx-auto p-5">
            <h1 className="text-center pb-5 border-b font-bold text-4xl mb-6">Product Information</h1>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Payment Date:
                    <input
                        type="date"
                        className="border p-2 rounded mt-1 text-base"
                        value={paymentData.paymentdate}
                        onChange={(e) =>
                            setPaymentData({ ...paymentData, paymentdate: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Payment Details:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={paymentData.paymentdetails}
                        onChange={(e) =>
                            setPaymentData({ ...paymentData, paymentdetails: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Receive By:
                     <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={paymentData.receive}
                        onChange={(e) =>
                            setPaymentData({ ...paymentData, receive: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Amount:
                    <input
                        type="number"
                        className="border p-2 rounded mt-1 text-base"
                        value={paymentData.amount}
                        onChange={(e) =>
                            setPaymentData({ ...paymentData, amount: e.target.value })
                        }
                    />
                </label>
            </div>
        </div>
    );
};
export default PaymentInfo;

