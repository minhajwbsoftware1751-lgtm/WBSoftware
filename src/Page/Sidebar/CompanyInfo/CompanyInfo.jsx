import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";

const CompanyInfo = ({ companyData, setCompanyData, setCompanyInfoOpen }) => {
    return (
        <div className="max-w-2xl mx-auto p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-2xl">Company</h1>
                <button onClick={() => setCompanyInfoOpen(false)}>
                   <RiCloseLargeLine size={24}/>
                </button>
            </div>

            <div className="flex flex-col gap-3 text-md border-b pb-6 mb-6">
                <label className="flex flex-col">
                    Company Name:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
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
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.email}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, email: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Phone:
                    <input
                        type="number"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
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
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.address}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, address: e.target.value })
                        }
                    />
                </label>

                <div className="flex justify-between">
                    <label className="flex flex-col">
                    Invoice Date:
                    <input
                        type="date"
                        className="border border-gray-300 p-1 rounded mt-1 text-sm"
                        value={companyData.date}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, date: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Invoice ID:
                    <input
                        type="number"
                        className="border border-gray-300 p-1 rounded mt-1 text-sm"
                        value={companyData.invoiceid}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, invoiceid: e.target.value })
                        }
                    />
                </label>
                </div>

                <label className="flex flex-col">
                    Salesman:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.salesman}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, salesman: e.target.value })
                        }
                    />
                </label>
            </div>

            <h1 className="text-center font-bold text-2xl mb-6">Customer Info</h1>
            <div className="flex flex-col gap-3 text-md">
                <label className="flex flex-col">
                    Customer Name:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.customername}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customername: e.target.value })
                        }
                    />
                </label>

                <div className="flex justify-between">
                    <label className="flex flex-col">
                    CustomerID:
                    <input
                        type="number"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.customerid}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customerid: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    Customer Phone:
                    <input
                        type="number"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.customerphone}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customerphone: e.target.value })
                        }
                    />
                </label>
                </div>

                <label className="flex flex-col">
                    Customer Address:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
                        value={companyData.customeraddress}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, customeraddress: e.target.value })
                        }
                    />
                </label>

                <div className="flex justify-between">
                    <label className="flex flex-col">
                    Payment Date:
                    <input
                        type="date"
                        className="border border-gray-300 p-1 rounded mt-1 text-sm"
                        value={companyData.paymentdate}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, paymentdate: e.target.value })
                        }
                    />
                </label>

                <label className="flex flex-col">
                    ReceiptID:
                    <input
                        type="text"
                        className="border border-gray-300 p-1 rounded mt-1 text-sm"
                        value={companyData.receiptid}
                        onChange={(e) =>
                            setCompanyData({ ...companyData, receiptid: e.target.value })
                        }
                    />
                </label>
                </div>

                <label className="flex flex-col">
                    Payment Method:
                    <input
                        type="text"
                        className="border border-gray-300 p-0.5 rounded mt-1 text-sm"
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

