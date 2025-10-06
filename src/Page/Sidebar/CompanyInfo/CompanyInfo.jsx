import React from "react";

const CompanyInfo = ({ companyData, setCompanyData, setCompanyInfoOpen }) => {
    return (
        <div className="max-w-2xl mx-auto p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-4xl">Company</h1>
                <button
                    onClick={() => setCompanyInfoOpen(false)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Close
                </button>
            </div>

            <div className="flex flex-col gap-5 text-2xl border-b pb-6 mb-6">
                <label className="flex flex-col">
                    Company Name:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.name}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, name: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Email:
                    <input
                        type="email"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.email}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, email: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Phone:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.phone}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, phone: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Address:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.address}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, address: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Invoice Date:
                    <input
                        type="date"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.date}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, date: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Invoice ID:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.invoiceid}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, invoiceid: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Salesman:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.salesman}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, salesman: e.target.value })
                        }
                    />
                </label>
            </div>

            <h1 className="text-center font-bold text-4xl mb-6">Customer Info</h1>
            <div className="flex flex-col gap-5 text-2xl">
                <label className="flex flex-col">
                    Customer Name:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.customername}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customername: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Customer ID:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.customerid}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customerid: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Customer Phone:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.customerphone}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customerphone: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Customer Address:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.customeraddress}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customeraddress: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Payment Date:
                    <input
                        type="date"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.paymentdate}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, paymentdate: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Receipt ID:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.receiptid}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, receiptid: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Payment Method:
                    <input
                        type="text"
                        className="border p-2 rounded mt-1 text-base"
                        value={companyData.paymentmethod}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, paymentmethod: e.target.value })
                        }
                    />
                </label>
            </div>
        </div>
    );
};

export default CompanyInfo;

