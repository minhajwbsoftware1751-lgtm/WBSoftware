import { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const PaymentInfo = ({
  paymentDataList,
  setPaymentDataList,
  editingPayment,
  setEditingPayment,
  editIndex2,
  setEditIndex2,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection((prev) => (prev === sectionName ? null : sectionName));
  };

  const [newPayment, setNewPayment] = useState({
    paymentdate: new Date().toISOString().slice(0, 10),
    paymentdetails: "",
    receive: "",
    amount: "",
  });

  useEffect(() => {
    if (editingPayment !== null) {
      setNewPayment(editingPayment);
      setShowModal(true);
    }
  }, [editingPayment]);

  const handleSave = () => {
    const { paymentdate, paymentdetails, receive, amount } = newPayment;
    if (!paymentdate || !paymentdetails || !receive || !amount) {
      alert("Please fill all fields!");
      return;
    }

    const updatedList = [...paymentDataList];
    if (editIndex2 !== null) {
      updatedList[editIndex2] = newPayment;
      setPaymentDataList(updatedList);
      setEditIndex2(null);
      setEditingPayment(null);
    } else {
      setPaymentDataList([...paymentDataList, newPayment]);
    }

    resetForm();
  };

  const handleClose = () => {
    resetForm();
  };

  const resetForm = () => {
    setShowModal(false);
    setEditIndex2(null);
    setEditingPayment(null);
    setNewPayment({
      paymentdate: new Date().toISOString().slice(0, 10),
      paymentdetails: "",
      receive: "",
      amount: "",
    });
  };

  return (
    <div className="max-w-2xl p-5 pb-0">
      {/* Payment Info Section */}
      <div>
        <h1
          onClick={() => toggleSection("payment")}
          className="text-left font-bold text-2xl mb-3 cursor-pointer select-none flex justify-between items-center gap-5"
        >
          Payment Information
          <span>
            {openSection === "payment" ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </h1>

        <div
          className={`transition-all duration-600 overflow-hidden ${
            openSection === "payment"
              ? "max-h-40 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          {openSection === "payment" && (
            <div className="flex justify-end p-3 rounded-lg bg-gray-50">
              <button
                onClick={() => setShowModal(true)}
                className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
              >
                <FaPlus size={14} />
                <span className="pl-2">Add Payment Info</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg shadow-xl w-auto p-5 relative">
            <button
              onClick={handleClose}
              className="absolute top-6 right-3 text-gray-700 hover:text-red-500"
            >
              <RiCloseLargeLine size={22} />
            </button>

            <h2 className="text-xl font-bold mb-4">
              {editIndex2 !== null ? "Edit Payment" : "Add Payment"}
            </h2>

            <label className="flex flex-col mb-3">
              Payment Details:
              <input
                type="text"
                className="border border-gray-300 p-2 rounded mt-1"
                value={newPayment.paymentdetails}
                onChange={(e) =>
                  setNewPayment({ ...newPayment, paymentdetails: e.target.value })
                }
              />
            </label>

            <label className="flex flex-col mb-3">
              Receive By:
              <input
                type="text"
                className="border border-gray-300 p-2 rounded mt-1"
                value={newPayment.receive}
                onChange={(e) =>
                  setNewPayment({ ...newPayment, receive: e.target.value })
                }
              />
            </label>

            <div className="flex justify-between gap-2">
              <label className="flex flex-col mb-3">
                Payment Date:
                <input
                  type="date"
                  className="border border-gray-300 p-2 rounded mt-1"
                  value={newPayment.paymentdate}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, paymentdate: e.target.value })
                  }
                />
              </label>

              <label className="flex flex-col mb-3">
                Amount:
                <input
                  type="number"
                  className="border border-gray-300 p-2 rounded mt-1"
                  value={newPayment.amount}
                  onChange={(e) =>
                    setNewPayment({ ...newPayment, amount: e.target.value })
                  }
                />
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentInfo;
