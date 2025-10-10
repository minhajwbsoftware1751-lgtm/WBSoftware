import { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

const PaymentInfo = ({ paymentDataList, setPaymentDataList }) => {
  const [showModal, setShowModal] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

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
    if (!newPayment.paymentdate || !newPayment.paymentdetails || !newPayment.receive || !newPayment.amount) {
      alert("Please fill all fields!");
      return;
    }

    if (editIndex !== null) {
      const updated = [...paymentDataList];
      updated[editIndex] = newPayment;
      setPaymentDataList(updated);
      setEditIndex(null);
      setEditingPayment(null);
    } else {
      setPaymentDataList([...paymentDataList, newPayment]);
    }

    setNewPayment({
      paymentdate: new Date().toISOString().slice(0, 10),
      paymentdetails: "",
      receive: "",
      amount: "",
    });
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
    setEditingPayment(null);
    setNewPayment({
      paymentdate: new Date().toISOString().slice(0, 10),
      paymentdetails: "",
      receive: "",
      amount: "",
    });
  };

  const handleEdit = (index) => {
    setEditingPayment(paymentDataList[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure to delete this payment?")) {
      const updated = paymentDataList.filter((_, i) => i !== index);
      setPaymentDataList(updated);
    }
  };

  return (
    <div className="max-w-2xl p-5 pb-0">
      <h1 className="text-left font-bold text-2xl">Payment Information</h1>
      <div className="flex justify-end p-5">
        <button
          onClick={() => setShowModal(true)}
          className="w-full justify-center border border-dashed p-2 rounded-lg text-black flex items-center hover:bg-[#DBEAFE]"
        >
          Add Payment Info
        </button>
      </div>

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
              {editIndex !== null ? "Edit Payment" : "Add Payment"}
            </h2>

            <label className="flex flex-col mb-3">
              Payment Details:
              <input
                type="text"
                className="border border-gray-300 p-2 rounded mt-1"
                value={newPayment.paymentdetails}
                onChange={(e) => setNewPayment({ ...newPayment, paymentdetails: e.target.value })}
              />
            </label>

            <label className="flex flex-col mb-3">
              Receive By:
              <input
                type="text"
                className="border border-gray-300 p-2 rounded mt-1"
                value={newPayment.receive}
                onChange={(e) => setNewPayment({ ...newPayment, receive: e.target.value })}
              />
            </label>

           <div className="flex justify-between gap-2">
              <label className="flex flex-col mb-3">
              Payment Date:
              <input
                type="date"
                className="border border-gray-300 p-2 rounded mt-1"
                value={newPayment.paymentdate}
                onChange={(e) => setNewPayment({ ...newPayment, paymentdate: e.target.value })}
              />
            </label>

            <label className="flex flex-col mb-3">
              Amount:
              <input
                type="number"
                className="border border-gray-300 p-2 rounded mt-1"
                value={newPayment.amount}
                onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
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
