import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const CompanyInfo = ({ companyData, setCompanyData }) => {
  const [showCompanyModal, setShowCompanyModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const paymentOptions = [
    { value: "Cash", label: "Cash" },
    { value: "Card", label: "Card" },
    { value: "Bank Transfer", label: "Bank Transfer" },
    { value: "Bkash", label: "Bkash" },
    { value: "Nagad", label: "Nagad" },
    { value: "Rocket", label: "Rocket" },
  ];

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
    <div className="max-w-2xl p-5 pb-0">

      {/* <h1 className="text-left font-bold text-2xl mb-5">Company Info</h1>
      <div className="fflex justify-end p-5">
        <button
          onClick={() => setShowCompanyModal(true)}
          className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
        >
          <FaPlus size={14} /><span className="pl-2">Add Company Info</span>
        </button>
      </div>

      <h1 className="text-left font-bold text-2xl mb-5">Customer Info</h1>
      <div className="flex justify-end p-5">

        <button
          onClick={() => setShowCustomerModal(true)}
          className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
        >
          <FaPlus size={14} /><span className="pl-2">Add Customer Info</span>
        </button>
      </div> */}

      {/* Company Info Section */}
      <div className="mb-6">
        <h1
          onClick={() => toggleSection("company")}
          className="text-left font-bold text-2xl mb-3 cursor-pointer select-none flex justify-between items-center"
        >
          Company Info
          <span>{openSection === "company" ? <FaArrowUp /> : <FaArrowDown />}</span>
        </h1>
        <div
          className={`transition-all duration-600 overflow-hidden ${openSection === "company" ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
          {openSection === "company" && (
            <div className="flex justify-end p-3 rounded-lg bg-gray-50">
              <button
                onClick={() => setShowCompanyModal(true)}
                className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
              >
                <FaPlus size={14} />
                <span className="pl-2">Add Company Info</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Customer Info Section */}
      <div>
        <h1
          onClick={() => toggleSection("customer")}
          className="text-left font-bold text-2xl mb-3 cursor-pointer select-none flex justify-between items-center"
        >
          Customer Info
          <span>{openSection === "customer" ? <FaArrowUp /> : <FaArrowDown />}</span>
        </h1>

        {openSection === "customer" && (
          <div className="flex justify-end p-3 rounded-lg bg-gray-50">
            <button
              onClick={() => setShowCustomerModal(true)}
              className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
            >
              <FaPlus size={14} />
              <span className="pl-2">Add Customer Info</span>
            </button>
          </div>
        )}
      </div>

      {/* Company Modal */}
      {showCompanyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg shadow-xl w-auto p-5 relative">
            <button onClick={handleCompanyClose} className="absolute top-6 right-3 text-gray-700 hover:text-red-500">
              <RiCloseLargeLine size={22} />
            </button>

            <h2 className="text-xl font-bold mb-4">Company Information</h2>

            <div>
              <label className="flex flex-col mb-2">
                Company Name:
                <input type="text" value={newCompany.name} onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>


              <div className="flex justify-between gap-2">
                <label className="flex flex-col mb-2">
                  Email:
                  <input type="email" value={newCompany.email} onChange={(e) => setNewCompany({ ...newCompany, email: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
                </label>

                <label className="flex flex-col mb-2">
                  Phone:
                  <input type="number" value={newCompany.phone} onChange={(e) => setNewCompany({ ...newCompany, phone: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
                </label>

              </div>
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
            </div>

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
          <div className="bg-white rounded-lg shadow-xl w-auto p-5 relative">
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
              <Select
                options={paymentOptions}
                value={paymentOptions.find(option => option.value === newCustomer.paymentmethod)}
                onChange={(selectedOption) =>
                  setNewCustomer({ ...newCustomer, paymentmethod: selectedOption.value })
                }
                isSearchable
              />

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
