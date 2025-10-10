import { useState } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";

const BankInfo = ({ bankData, setBankData }) => {
  const [showBankModal, setShowBankModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  const [newBank, setNewBank] = useState({
    bankname: "",
    branch: "",
    accountno: "",
    accountname: "",
  });

  const [newTransaction, setNewTransaction] = useState({
    bkash: "01700000000",
    nagad: "01800000000",
    rocket: "01900000000",
    upay: "01600000000",
  });

  const banks = [
    { name: "Pubali Bank", branch: "Birganj, Pubali Branch", accountno: "4882901017348", accountname: "ITDER" },
    { name: "Prime Bank", branch: "Mohakhali", accountno: "987987987", accountname: "ITDER" },
    { name: "Dutch-Bangla Bank", branch: "Banani", accountno: "456456456", accountname: "ITDER" },
    { name: "Brac Bank", branch: "Mohakhali", accountno: "1234234234", accountname: "ITDER" },
  ];

  const handleBankSelect = (selectedBankName) => {
    const selected = banks.find((b) => b.name === selectedBankName);
    if (selected) {
      setNewBank({
        ...newBank,
        bankname: selected.name,
        branch: selected.branch,
        accountno: selected.accountno,
        accountname: selected.accountname,
      });
    } else {
      setNewBank({ bankname: "", branch: "", accountno: "", accountname: "" });
    }
  };

  const handleBankSave = () => {
    setBankData({ ...bankData, ...newBank });
    setShowBankModal(false);
  };

  const handleTransactionSave = () => {
    setBankData({ ...bankData, ...newTransaction });
    setShowTransactionModal(false);
  };

  const handleBankClose = () => {
    setShowBankModal(false);
    setNewBank({ bankname: "", branch: "", accountno: "", accountname: "" });
  };

  const handleTransactionClose = () => {
    setShowTransactionModal(false);
    setNewTransaction({
      bkash: "01700000000",
      nagad: "01800000000",
      rocket: "01900000000",
      upay: "01600000000",
    });
  };

  return (
    <div className="max-w-2xl p-5">
      <h1 className="text-center font-bold text-2xl mb-5">Bank Information</h1>

      <div className="flex justify-between gap-3 mb-5">
        <button
          onClick={() => setShowBankModal(true)}
          className="flex items-center border border-dashed p-2 rounded-lg hover:bg-gray-100"
        >
          <FaPlus size={14} /><span className="pl-2">Add Bank Info</span>
        </button>

        <button
          onClick={() => setShowTransactionModal(true)}
          className="flex items-center border border-dashed p-2 rounded-lg hover:bg-gray-100"
        >
          <FaPlus size={14} /><span className="pl-2">Add Transaction Info</span>
        </button>
      </div>

      {showBankModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-5 relative">
            <button onClick={handleBankClose} className="absolute top-6 right-3 text-gray-700 hover:text-red-500">
              <RiCloseLargeLine size={22} />
            </button>

            <h2 className="text-xl font-bold mb-4">Bank Information</h2>

            <label className="flex flex-col mb-2">
              Bank Name:
              <select
                className="border border-gray-300 p-1 rounded mt-1 h-10"
                value={newBank.bankname}
                onChange={(e) => handleBankSelect(e.target.value)}
              >
                <option value="">Select Bank</option>
                {banks.map((bank, i) => <option key={i} value={bank.name}>{bank.name}</option>)}
              </select>
            </label>

            <label className="flex flex-col mb-2">
              Branch:
              <input type="text" value={newBank.branch} readOnly className="border border-gray-300 p-1 rounded mt-1 h-10 bg-gray-100" />
            </label>

            <label className="flex flex-col mb-2">
              Account No:
              <input type="text" value={newBank.accountno} readOnly className="border border-gray-300 p-1 rounded mt-1 h-10 bg-gray-100" />
            </label>

            <label className="flex flex-col mb-2">
              Account Name:
              <input type="text" value={newBank.accountname} readOnly className="border border-gray-300 p-1 rounded mt-1 h-10 bg-gray-100" />
            </label>

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleBankClose} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">Cancel</button>
              <button onClick={handleBankSave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">Save</button>
            </div>
          </div>
        </div>
      )}

      {showTransactionModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-5 relative">
            <button onClick={handleTransactionClose} className="absolute top-6 right-3 text-gray-700 hover:text-red-500">
              <RiCloseLargeLine size={22} />
            </button>

            <h2 className="text-xl font-bold mb-4">Transaction Information</h2>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col mb-2">
                Bkash:
                <input type="number" value={newTransaction.bkash} onChange={(e) => setNewTransaction({ ...newTransaction, bkash: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>

              <label className="flex flex-col mb-2">
                Nagad:
                <input type="text" value={newTransaction.nagad} onChange={(e) => setNewTransaction({ ...newTransaction, nagad: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>

              <label className="flex flex-col mb-2">
                Rocket:
                <input type="text" value={newTransaction.rocket} onChange={(e) => setNewTransaction({ ...newTransaction, rocket: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>

              <label className="flex flex-col mb-2">
                UPAY:
                <input type="text" value={newTransaction.upay} onChange={(e) => setNewTransaction({ ...newTransaction, upay: e.target.value })} className="border border-gray-300 p-1 rounded mt-1 h-10" />
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button onClick={handleTransactionClose} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">Cancel</button>
              <button onClick={handleTransactionSave} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankInfo;
