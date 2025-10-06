import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const PaymentInfo = ({ paymentData, setPaymentData, setPaymentInfoOpen }) => {

    return (
        <div className="max-w-2xl mx-auto p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-4xl">Payment Information</h1>
                <button onClick={() => setPaymentInfoOpen(false)}>
                    <RiCloseLargeLine size={30} />
                </button>
            </div>
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

