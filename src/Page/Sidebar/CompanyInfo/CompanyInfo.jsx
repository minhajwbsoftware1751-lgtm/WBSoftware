import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const CompanyInfo = ({ companyData, setCompanyData }) => {
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  const [newCompany, setNewCompany] = useState({
    name: "WB Software Ltd.",
    email: "wbsoftwaresteam@gmail.com",
    phone: "+8801602024545",
    address: "House# 375, Flat#3B, Road#28, Mohakhali DOSH, Dhaka",
    date: new Date().toISOString().slice(0, 10),
    invoiceid: "",
    salesman: "",
  });

  const [newCustomer, setNewCustomer] = useState({
    customername: "",
    customerid: "",
    customerphone: "",
    customeraddress: "",
    paymentdate: new Date().toISOString().slice(0, 10),
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
      <div className="fflex justify-end p-5">
        <button
          onClick={() => setShowCompanyModal(true)}
          className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-gray-100"
        >
          <FaPlus size={14} /><span className="pl-2">Add Company Info</span>
        </button>


      </div>

      <h1 className="text-center font-bold text-2xl mb-5">Customer Info</h1>
      <div className="flex justify-end p-5">

        <button
          onClick={() => setShowCustomerModal(true)}
          className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-gray-100"
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
