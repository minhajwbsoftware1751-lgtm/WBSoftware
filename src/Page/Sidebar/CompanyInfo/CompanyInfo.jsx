// import React from "react";
// import { RiCloseLargeLine } from "react-icons/ri";

// const CompanyInfo = ({ companyData, setCompanyData, setCompanyInfoOpen }) => {
//     return (
//         <div className="max-w-2xl p-5">
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-center font-bold text-2xl">Company</h1>
               
//             </div>

//             <div className="flex flex-col gap-3 text-md border-b pb-6 mb-6">
//                 <label className="flex flex-col">
//                     Company Name:
//                     <input
//                         type="text"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.name}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, name: e.target.value })
//                         }
//                     />
//                 </label>

//                 <label className="flex flex-col">
//                     Email:
//                     <input
//                         type="email"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.email}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, email: e.target.value })
//                         }
//                     />
//                 </label>

//                 <label className="flex flex-col">
//                     Phone:
//                     <input
//                         type="number"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.phone}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, phone: e.target.value })
//                         }
//                     />
//                 </label>

//                 <label className="flex flex-col">
//                     Address:
//                     <input
//                         type="text"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.address}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, address: e.target.value })
//                         }
//                     />
//                 </label>

//                 <div className="flex justify-between">
//                     <label className="flex flex-col">
//                         Invoice Date:
//                         <input
//                             type="date"
//                             className="border border-gray-300 p-1 rounded mt-1 w-50 h-10"
//                             value={companyData.date}
//                             onChange={(e) =>
//                                 setCompanyData({ ...companyData, date: e.target.value })
//                             }
//                         />
//                     </label>

//                     <label className="flex flex-col">
//                         Invoice ID:
//                         <input
//                             type="number"
//                             className="border border-gray-300 p-1 rounded mt-1 h-10"
//                             value={companyData.invoiceid}
//                             onChange={(e) =>
//                                 setCompanyData({ ...companyData, invoiceid: e.target.value })
//                             }
//                         />
//                     </label>
//                 </div>

//                 <label className="flex flex-col">
//                     Salesman:
//                     <input
//                         type="text"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.salesman}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, salesman: e.target.value })
//                         }
//                     />
//                 </label>
//             </div>

//             <h1 className="text-left font-bold text-2xl mb-6">Customer Info</h1>
//             <div className="flex flex-col gap-3 text-md">
//                 <label className="flex flex-col">
//                     Customer Name:
//                     <input
//                         type="text"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.customername}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, customername: e.target.value })
//                         }
//                     />
//                 </label>

//                 <div className="flex justify-between">
//                     <label className="flex flex-col">
//                         CustomerID:
//                         <input
//                             type="number"
//                             className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                             value={companyData.customerid}
//                             onChange={(e) =>
//                                 setCompanyData({ ...companyData, customerid: e.target.value })
//                             }
//                         />
//                     </label>

//                     <label className="flex flex-col">
//                         Customer Phone:
//                         <input
//                             type="number"
//                             className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                             value={companyData.customerphone}
//                             onChange={(e) =>
//                                 setCompanyData({ ...companyData, customerphone: e.target.value })
//                             }
//                         />
//                     </label>
//                 </div>

//                 <label className="flex flex-col">
//                     Customer Address:
//                     <input
//                         type="text"
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.customeraddress}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, customeraddress: e.target.value })
//                         }
//                     />
//                 </label>

//                 <div className="flex justify-between">
//                     <label className="flex flex-col">
//                         Payment Date:
//                         <input
//                             type="date"
//                             className="border border-gray-300 p-1 rounded mt-1 w-50 h-10"
//                             value={companyData.paymentdate}
//                             onChange={(e) =>
//                                 setCompanyData({ ...companyData, paymentdate: e.target.value })
//                             }
//                         />
//                     </label>

//                     <label className="flex flex-col">
//                         ReceiptID:
//                         <input
//                             type="text"
//                             className="border border-gray-300 p-1 rounded mt-1 h-10"
//                             value={companyData.receiptid}
//                             onChange={(e) =>
//                                 setCompanyData({ ...companyData, receiptid: e.target.value })
//                             }
//                         />
//                     </label>
//                 </div>

//                 <label className="flex flex-col">
//                     Payment Method:
//                     <select
//                         className="border border-gray-300 p-0.5 rounded mt-1 h-10"
//                         value={companyData.paymentmethod}
//                         onChange={(e) =>
//                             setCompanyData({ ...companyData, paymentmethod: e.target.value })
//                         }
//                     >
//                         <option value="">Select a method</option>
//                         <option value="Cash">Cash</option>
//                         <option value="Card">Card</option>
//                         <option value="Bank Transfer">Bank Transfer</option>
//                         <option value="Bkash">Bkash</option>
//                         <option value="Nagad">Nagad</option>
//                         <option value="Rocket">Rocket</option>
//                     </select>
//                 </label>

//             </div>
//         </div>
//     );
// };

// export default CompanyInfo;


import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const CompanyInfo = ({ companyData, setCompanyData }) => {
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  const [newCompany, setNewCompany] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    invoiceid: "",
    salesman: "",
  });

  const [newCustomer, setNewCustomer] = useState({
    customername: "",
    customerid: "",
    customerphone: "",
    customeraddress: "",
    paymentdate: "",
    receiptid: "",
    paymentmethod: "",
  });

  const handleCompanySave = () => {
    setCompanyData({ ...companyData, ...newCompany });
    setShowCompanyModal(false);
  };

  const handleCustomerSave = () => {
    setCompanyData({ ...companyData, ...newCustomer });
    setShowCustomerModal(false);
  };

  const handleCompanyClose = () => {
    setShowCompanyModal(false);
    setNewCompany({
      name: "",
      email: "",
      phone: "",
      address: "",
      date: "",
      invoiceid: "",
      salesman: "",
    });
  };

  const handleCustomerClose = () => {
    setShowCustomerModal(false);
    setNewCustomer({
      customername: "",
      customerid: "",
      customerphone: "",
      customeraddress: "",
      paymentdate: "",
      receiptid: "",
      paymentmethod: "",
    });
  };

  return (
    <div className="max-w-2xl p-5">
      <h1 className="text-center font-bold text-2xl mb-5">Company Info</h1>

      {/* Buttons */}
      <div className="flex justify-between gap-3 mb-5">
        <button
          onClick={() => setShowCompanyModal(true)}
          className="flex items-center border border-dashed p-2 rounded-lg hover:bg-gray-100"
        >
          <FaPlus size={14} /><span className="pl-2">Add Company Info</span>
        </button>

        <button
          onClick={() => setShowCustomerModal(true)}
          className="flex items-center border border-dashed p-2 rounded-lg hover:bg-gray-100"
        >
          <FaPlus size={14} /><span className="pl-2">Add Customer Info</span>
        </button>
      </div>

      {/* Company Modal */}
      {showCompanyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-5 relative">
            <button onClick={handleCompanyClose} className="absolute top-6 right-3 text-gray-700 hover:text-red-500">
              <RiCloseLargeLine size={22} />
            </button>

            <h2 className="text-xl font-bold mb-4">Company Information</h2>

            <label className="flex flex-col mb-2">
              Company Name:
              <input type="text" value={newCompany.name} onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <label className="flex flex-col mb-2">
              Email:
              <input type="email" value={newCompany.email} onChange={(e) => setNewCompany({ ...newCompany, email: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <label className="flex flex-col mb-2">
              Phone:
              <input type="number" value={newCompany.phone} onChange={(e) => setNewCompany({ ...newCompany, phone: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <label className="flex flex-col mb-2">
              Address:
              <input type="text" value={newCompany.address} onChange={(e) => setNewCompany({ ...newCompany, address: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <div className="flex justify-between gap-2">
              <label className="flex flex-col">
                Invoice Date:
                <input type="date" value={newCompany.date} onChange={(e) => setNewCompany({ ...newCompany, date: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>

              <label className="flex flex-col">
                Invoice ID:
                <input type="number" value={newCompany.invoiceid} onChange={(e) => setNewCompany({ ...newCompany, invoiceid: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>
            </div>

            <label className="flex flex-col mb-2">
              Salesman:
              <input type="text" value={newCompany.salesman} onChange={(e) => setNewCompany({ ...newCompany, salesman: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleCompanyClose} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">Cancel</button>
              <button onClick={handleCompanySave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Modal */}
      {showCustomerModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-5 relative">
            <button onClick={handleCustomerClose} className="absolute top-6 right-3 text-gray-700 hover:text-red-500">
              <RiCloseLargeLine size={22} />
            </button>

            <h2 className="text-xl font-bold mb-4">Customer Information</h2>

            <label className="flex flex-col mb-2">
              Customer Name:
              <input type="text" value={newCustomer.customername} onChange={(e) => setNewCustomer({ ...newCustomer, customername: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <div className="flex justify-between gap-2">
              <label className="flex flex-col">
                Customer ID:
                <input type="number" value={newCustomer.customerid} onChange={(e) => setNewCustomer({ ...newCustomer, customerid: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>

              <label className="flex flex-col">
                Customer Phone:
                <input type="number" value={newCustomer.customerphone} onChange={(e) => setNewCustomer({ ...newCustomer, customerphone: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>
            </div>

            <label className="flex flex-col mb-2">
              Customer Address:
              <input type="text" value={newCustomer.customeraddress} onChange={(e) => setNewCustomer({ ...newCustomer, customeraddress: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
            </label>

            <div className="flex justify-between gap-2">
              <label className="flex flex-col">
                Payment Date:
                <input type="date" value={newCustomer.paymentdate} onChange={(e) => setNewCustomer({ ...newCustomer, paymentdate: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>

              <label className="flex flex-col">
                Receipt ID:
                <input type="text" value={newCustomer.receiptid} onChange={(e) => setNewCustomer({ ...newCustomer, receiptid: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>
            </div>

            <label className="flex flex-col mb-2">
              Payment Method:
              <select value={newCustomer.paymentmethod} onChange={(e) => setNewCustomer({ ...newCustomer, paymentmethod: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10">
                <option value="">Select a method</option>
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Bkash">Bkash</option>
                <option value="Nagad">Nagad</option>
                <option value="Rocket">Rocket</option>
              </select>
            </label>

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleCustomerClose} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">Cancel</button>
              <button onClick={handleCustomerSave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
