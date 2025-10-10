import { BiPhoneCall } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { SiOnlyoffice } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiPrinter, BiDownload } from "react-icons/bi";
import { useEffect, useState } from "react";
import CompanyInfo from "../Sidebar/CompanyInfo/CompanyInfo";
import ProductInfo from "../Sidebar/ProductInfo/ProductInfo";
import PaymentInfo from "../Sidebar/PaymentInfo/PaymentInfo";
import BankInfo from "../Sidebar/BankInfo/BankInfo";
import { useRef } from "react";
import { IoColorPalette } from "react-icons/io5";


const Invoice = () => {
    const handlePrint = () => {
        window.print();
    };

    const companyRef = useRef(null);
    const productRef = useRef(null);
    const paymentRef = useRef(null);
    const bankRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };



    const [companyData, setCompanyData] = useState({
        name: "WB Software Ltd.",
        email: "wbsoftwaresteam@gmail.com",
        phone: "+8801602024545",
        address: "House# 375, Flat#3B, Road#28, Mohakhali DOSH, Dhaka",
        date: new Date().toISOString().slice(0, 10),
        invoiceid: "",
        salesman: "",
        customername: "",
        customerid: "",
        customerphone: "",
        customeraddress: "",
        paymentdate: new Date().toISOString().slice(0, 10),
        receiptid: "",
        paymentmethod: "",
    });
    const [companyinfoopen, setCompanyInfoOpen] = useState(true);

    const [productData, setProductData] = useState([]);
    const [editIndex1, setEditIndex1] = useState(null);


    const handleDelete = (index) => {
        if (window.confirm("Are you sure to delete this row?")) {
            const updated = productData.filter((_, i) => i !== index);
            setProductData(updated);
        }
    };

    const [editingProduct, setEditingProduct] = useState(null);
    const handleEdit = (index) => {
        const productToEdit = productData[index];
        setEditingProduct(productToEdit);
        setEditIndex1(index);
    };


    const handleDeletePayment = (index) => {
        if (window.confirm("Are you sure to delete this row?")) {
            const updated = paymentDataList.filter((_, i) => i !== index);
            setPaymentDataList(updated);
        }
    };

    const handleEditPayment = (index) => {
        const paymentToEdit = paymentDataList[index];
        setEditingPayment(paymentToEdit);
        setEditIndex2(index);
    };



    const [productinfoopen, setProductInfoOpen] = useState(true);

    const [paymentDataList, setPaymentDataList] = useState([]);
    const [editingPayment, setEditingPayment] = useState(null);
    const [editIndex2, setEditIndex2] = useState(null);



    const [paymentData, setPaymentData] = useState({
        paymentdate: new Date().toISOString().slice(0, 10),
        paymentdetails: "",
        receive: "",
        amount: "",
    });
    const [paymentinfoopen, setPaymentInfoOpen] = useState(true);

    const [bankData, setBankData] = useState({
        bankname: "No",
        branch: "No",
        accountno: "No",
        accountname: "No",
        bkash: "01774444000 (Personal)",
        nagad: "01774444000 (Personal)",
        rocket: "017744440005 (Personal)",
        upay: "01774444000 (Personal)",
    });
    const [bankinfoopen, setBankInfoOpen] = useState(true);

    const [closingData, setClosingData] = useState(true);

    const [themeColor, setThemeColor] = useState("red");


    return (
        <div className="overflow-y-auto scroll-hidden">
            <div className="fixed left-0 top-80 transform -translate-y-1/2  shadow-lg rounded-r z-10">
                <button
                    onClick={handlePrint}
                    className="flex items-center  px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <BiPrinter />
                </button>
            </div>

            <div className="fixed space-y-1 right-0 top-85 transform -translate-y-1/2  shadow-lg rounded-r z-10">
                <button
                    onClick={() => scrollToSection(companyRef)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <SiOnlyoffice />
                </button>

                <button
                    onClick={() => scrollToSection(productRef)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <MdOutlineProductionQuantityLimits />
                </button>

                <button
                    onClick={() => scrollToSection(paymentRef)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <MdPayment />
                </button>

                <button
                    onClick={() => scrollToSection(bankRef)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <BsBank />
                </button>
                <button
                    onClick={() => scrollToSection(bankRef)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <IoColorPalette />
                </button>
            </div>

            <div className="invoice-print-area w-[70%] pl-8">

                <div className="flex justify-between items-center">
                    <img
                        src="https://wbsoftwares.com/img/logo.4b604ac6.png"
                        alt="profile"
                        className="pt-4 w-80 h-16"
                    />
                    <div className="flex items-center gap-4">
                        <div>
                            <h1>+8801309085965</h1>
                            <h1>+8801309085965</h1>
                        </div>
                        <div className="bg-[#DBEAFE] p-2 rounded">
                            <BiPhoneCall size={36} />
                        </div>
                    </div>
                </div>
                {/* Company Information */}
                <div
                    onClick={() => {
                        // setCompanyInfoOpen(true);
                        // setProductInfoOpen(false);
                        // setPaymentInfoOpen(false);
                        // setBankInfoOpen(false);
                        // setClosingInfoOpen(false);
                    }}
                    className="border-1 border-[#CBD5E1] mt-3">

                    <table className="min-w-full border-1 border-[#CBD5E1]">
                        <thead>
                            <tr className="bg-blue-100">
                                <th colSpan={2} className="border-1 border-[#CBD5E1] px-4 py-2 w-[50%]">
                                    Company Information
                                </th>
                                <th colSpan={2} className="border-1 border-[#CBD5E1] px-4 py-2 w-[50%]">
                                    Customer Info
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border-[#CBD5E1] px-4  text-left w-[15%]">Company</td>
                                <td className="border-[#CBD5E1] px-4  text-left w-[35%] break-words">
                                    {companyData.name}
                                </td>
                                <td className="border-l-1 border-[#CBD5E1] px-4  text-left w-[15%]">Customer</td>
                                <td className="border-[#CBD5E1] px-4  text-left w-[35%] break-words">
                                    {companyData.customername}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-[#CBD5E1] px-4  text-left">Email</td>
                                <td className="border-[#CBD5E1] px-4  text-left break-words">
                                    {companyData.email}
                                </td>
                                <td className="border-l-1 border-[#CBD5E1] px-4  text-left">
                                    CustomerID
                                </td>
                                <td className="border-[#CBD5E1] px-4  text-left">
                                    {companyData.customerid}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-[#CBD5E1] px-4  text-left">Phone</td>
                                <td className="border-[#CBD5E1] px-4  text-left">
                                    {companyData.phone}
                                </td>
                                <td className="border-l-1 border-[#CBD5E1] px-4  text-left">Phone</td>
                                <td className="border-[#CBD5E1] px-4  text-left">
                                    {companyData.customerphone}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-[#CBD5E1] px-4  text-left align-top">Address</td>
                                <td className="border-[#CBD5E1] px-4  text-left break-words align-top">
                                    {companyData.address}
                                </td>
                                <td className="border-l-1 border-[#CBD5E1] px-4  text-left align-top">Address</td>
                                <td className="border-[#CBD5E1] px-4  text-left break-words align-top">
                                    {companyData.customeraddress}
                                </td>
                            </tr>

                            <tr>

                            </tr>

                            <tr>
                                <td className="border-t-1 border-[#CBD5E1] px-4  text-left">Invoice Date</td>
                                <td className="border-t-1 border-[#CBD5E1] px-4  text-left">
                                    {companyData.date}
                                </td>
                                <td className="border-l-1 border-t-1 border-[#CBD5E1] px-4  text-left">
                                    Payment Date
                                </td>
                                <td className="border-t-1 border-[#CBD5E1] px-4  text-left">
                                    {companyData.paymentdate}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-[#CBD5E1] px-4  text-left">Invoice ID</td>
                                <td className="border-[#CBD5E1] px-4  text-left">
                                    {companyData.invoiceid}
                                </td>
                                <td className="border-l-1 border-[#CBD5E1] px-4  text-left">
                                    Receipt ID
                                </td>
                                <td className="border-[#CBD5E1] px-4  text-left">
                                    {companyData.receiptid}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-[#CBD5E1] px-4  text-left">Salesman</td>
                                <td className="border-[#CBD5E1] px-4  text-left break-words">
                                    {companyData.salesman}
                                </td>
                                <td className="border-l-1 border-[#CBD5E1] px-4  text-left">
                                    Payment Method
                                </td>
                                <td className="border-[#CBD5E1] px-4  text-left">
                                    {companyData.paymentmethod}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Product Information */}
                {productData.length > 0 && (
                    <>
                        <h1 className="mt-3 text-2xl font-semibold text-red-500 text-center">
                            Product Information
                        </h1>

                        <div
                            onClick={() => {
                                // setProductInfoOpen(true);
                                // setCompanyInfoOpen(false);
                                // setPaymentInfoOpen(false);
                                // setBankInfoOpen(false);
                                // setClosingInfoOpen(false);
                            }}
                            className="border-1 border-[#CBD5E1] mt-3 cursor-pointer hover:bg-gray-50"
                        >
                            <table className="min-w-full border-1 border-[#CBD5E1] text-center">
                                <thead>
                                    <tr className="bg-blue-100">
                                        <th className="border-1 border-[#CBD5E1] w-1/12 py-2">Serial</th>
                                        <th className="border-1 border-[#CBD5E1] w-1/3 py-2">Descriptions</th>
                                        <th className="border-1 border-[#CBD5E1] w-1/12 py-2">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productData.map((item, i) => (
                                        <tr key={i} className="h-10 group hover:bg-gray-50 relative">
                                            <td className="border-1 border-[#CBD5E1] px-4">{i + 1}</td>
                                            <td className="border-1 border-[#CBD5E1] px-4 break-words">
                                                {item.descriptions}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 relative">
                                                {item.total}
                                                <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden group-hover:flex gap-2">
                                                    <button
                                                        onClick={() => handleEdit(i)}
                                                        className="text-blue-500 hover:text-blue-700 text-sm"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(i)}
                                                        className="text-red-500 hover:text-red-700 text-sm"
                                                    >
                                                        <MdDeleteForever />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td
                                            colSpan={2}
                                            className="border-1 border-[#CBD5E1] px-4 py-2 text-right font-semibold"
                                        >
                                            Total
                                        </td>
                                        <td className="border-1 border-[#CBD5E1] bg-blue-100 px-4 py-2 font-semibold">
                                            {productData.reduce((sum, item) => sum + Number(item.total || 0), 0)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )}


                {paymentDataList.length > 0 && (
                    <>
                        <h1 className="mt-3 text-2xl font-semibold text-red-500 text-center">
                            Payment Information
                        </h1>
                        <table className="min-w-full border-1 border-[#CBD5E1] text-center mt-3">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border-1 border-[#CBD5E1] w-1/12 py-2">SI</th>
                                    <th className="border-1 border-[#CBD5E1] w-2/12 py-2">Date</th>
                                    <th className="border-1 border-[#CBD5E1] w-6/12 py-2">Details</th>
                                    <th className="border-1 border-[#CBD5E1] w-2/12 py-2">Receive By</th>
                                    <th className="border-1 border-[#CBD5E1] w-2/12 py-2">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paymentDataList.map((item, i) => (
                                    <tr key={i} className="h-10 group">
                                        <td className="border-1 border-[#CBD5E1] px-4">{i + 1}</td>
                                        <td className="border-1 border-[#CBD5E1] px-4">{item.paymentdate}</td>
                                        <td className="border-1 border-[#CBD5E1] px-4 break-words">{item.paymentdetails}</td>
                                        <td className="border-1 border-[#CBD5E1] px-4 break-words">{item.receive}</td>
                                        <td className="border-1 border-[#CBD5E1] px-4 relative">{item.amount}
                                            <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden group-hover:flex gap-2">
                                                <button
                                                    onClick={() => handleEditPayment(i)}
                                                    className="text-blue-500 hover:text-blue-700 text-sm"
                                                >
                                                    <FaEdit />
                                                </button>
                                                <button
                                                    onClick={() => handleDeletePayment(i)}
                                                    className="text-red-500 hover:text-red-700 text-sm"
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>

                )}

                {/*Bank Information */}
                {(
                    bankData.bankname !== "No" ||
                    bankData.branch !== "No" ||
                    bankData.accountno !== "No" ||
                    bankData.accountname !== "No" ||
                    bankData.bkash !== "01774444000 (Personal)" ||
                    bankData.nagad !== "01774444000 (Personal)" ||
                    bankData.rocket !== "017744440005 (Personal)" ||
                    bankData.upay !== "01774444000 (Personal)"
                ) && (
                        <>
                            <h1 className="mt-3 text-2xl font-semibold text-red-500 text-center">
                                Bank Information
                            </h1>

                            <div className="border-1 border-[#CBD5E1] mt-3">
                                <table className="min-w-full table-fixed border-1 border-[#CBD5E1] text-center">
                                    <thead>
                                        <tr className="bg-blue-100">
                                            <th colSpan={2} className="border-1 border-[#CBD5E1] w-6/12 px-4 py-2">
                                                Bank Information
                                            </th>
                                            <th colSpan={2} className="border-1 border-[#CBD5E1] w-6/12 px-4 py-2">
                                                Transaction Information
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 w-2/12 text-left">
                                                Bank
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 w-4/12 text-left">
                                                {bankData.bankname}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2  w-2/12 text-left">
                                                Bkash
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 w-4/12 text-left">
                                                {bankData.bkash}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                Branch
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                {bankData.branch}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                Nagad
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                {bankData.nagad}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                Account No
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                {bankData.accountno}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                Rocket
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                {bankData.rocket}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                Account Name
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                {bankData.accountname}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                Upay
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 py-2 text-left">
                                                {bankData.upay}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                {productData.reduce((sum, item) => sum + Number(item.total || 0), 0) > 0 &&
                    paymentDataList.reduce((sum, item) => sum + Number(item.amount || 0), 0) > 0 && (
                        <>
                            <h1 className="mt-3 text-2xl font-semibold text-red-500 text-center">
                                Closing Calculation
                            </h1>

                            <div className="border-1 border-[#CBD5E1] mt-3 cursor-pointer hover:bg-gray-50">
                                <table className="min-w-full border-1 border-[#CBD5E1] text-center">
                                    <thead>
                                        <tr className="bg-blue-100">
                                            <th className="border-1 border-[#CBD5E1] py-2">Product Total</th>
                                            <th className="border-1 border-[#CBD5E1] py-2">Payment Total</th>
                                            <th className="border-1 border-[#CBD5E1] py-2">Due</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-1 border-[#CBD5E1] px-4">
                                                {productData.reduce((sum, item) => sum + Number(item.total || 0), 0)}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4">
                                                {paymentDataList.reduce((sum, item) => sum + Number(item.amount || 0), 0)}
                                            </td>
                                            <td className="border-1 border-[#CBD5E1] px-4 font-semibold">
                                                {productData.reduce((sum, item) => sum + Number(item.total || 0), 0) -
                                                    paymentDataList.reduce((sum, item) => sum + Number(item.amount || 0), 0)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}




                <div className="border-1 border-[#CBD5E1] mt-3">
                    <table className="min-w-full table-fixed border-1 border-[#CBD5E1] text-center">
                        <thead>
                            <tr>
                                <th className="border-1 border-[#CBD5E1] px-4 py-2 h-40"></th>
                                <th className="border-1 border-[#CBD5E1] px-4 py-2 h-40"></th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border-1 border-[#CBD5E1] px-4 py-2 font-semibold text-center">SIGNATURE</td>
                                <td className="border-1 border-[#CBD5E1] px-4 py-2 font-semibold text-center">SIGNATURE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className="pr-10 absolute right-0 top-0 h-screen overflow-y-auto scroll-hidden lg:w-[30%] sm:w-full lg:bg-white bg-gray-100 flex flex-col">

                {companyinfoopen && (
                    <div ref={companyRef}>
                        <CompanyInfo
                            companyData={companyData}
                            setCompanyData={setCompanyData}
                        />
                    </div>
                )}

                {productinfoopen && (
                    <div ref={productRef}>
                        <ProductInfo
                            productData={productData}
                            setProductData={setProductData}
                            editingProduct={editingProduct}
                            setEditingProduct={setEditingProduct}
                            editIndex={editIndex1}
                            setEditIndex={setEditIndex1}
                        />

                    </div>
                )}

                {paymentinfoopen && (
                    <div ref={paymentRef}>
                        <PaymentInfo
                            paymentDataList={paymentDataList}
                            setPaymentDataList={setPaymentDataList}
                            editingPayment={editingPayment}
                            setEditingPayment={setEditingPayment}
                            editIndex2={editIndex2}
                            setEditIndex2={setEditIndex2}
                        />

                    </div>
                )}

                {bankinfoopen && (
                    <div ref={bankRef}>
                        <BankInfo
                            bankData={bankData}
                            setBankData={setBankData}
                        />
                    </div>
                )}


            </div>
        </div>
    );
};

export default Invoice;
