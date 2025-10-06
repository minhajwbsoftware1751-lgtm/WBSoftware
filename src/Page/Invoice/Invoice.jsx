import { BiPhoneCall } from "react-icons/bi";
import { useState } from "react";
import CompanyInfo from "../Sidebar/CompanyInfo/CompanyInfo";
import ProductInfo from "../Sidebar/ProductInfo/ProductInfo";
import PaymentInfo from "../Sidebar/PaymentInfo/PaymentInfo";
import BankInfo from "../Sidebar/BankInfo/BankInfo";
import ClosingInfo from "../Sidebar/ClosingCalculation/ClosingInfo";

const Invoice = () => {
    const [companyData, setCompanyData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        date: "",
        invoiceid: "",
        salesman: "",
        customername: "",
        customerid: "",
        customerphone: "",
        customeraddress: "",
        paymentdate: "",
        receiptid: "",
        paymentmethod: "",
    });
    const [companyinfoopen, setCompanyInfoOpen] = useState(false);

    const [productData, setProductData] = useState({
        proposal: "",
        descriptions: "",
        total: "",
    });
    const [productinfoopen, setProductInfoOpen] = useState(false);

    const [paymentData, setPaymentData] = useState({
        paymentdate: "",
        paymentdetails: "",
        receive: "",
        amount: "",
    });
    const [paymentinfoopen, setPaymentInfoOpen] = useState(false);

    const [bankData, setBankData] = useState({
        bankname: "",
        branch: "",
        accountno: "",
        accountname: "",
        transationid: "",
        transationfrom: "",
        transactiontype: "",
    });
    const [bankinfoopen, setBankInfoOpen] = useState(false);

    const [closingdata, setClosingData] = useState({
        totalamount: "",
        paidamount: "",
        dueamount: "",
    });
    const [closinginfoopen, setClosingInfoOpen] = useState(false);

    return (
        <div className="overflow-y-hidden">
            <div
                className={`${companyinfoopen || productinfoopen || paymentinfoopen || bankinfoopen || closinginfoopen ? "w-8/12": "mx-auto"}`}>
                <div className="flex justify-between items-center">
                    <img
                        src="https://wbsoftwares.com/img/logo.4b604ac6.png"
                        alt="profile"
                        className="pt-4"
                    />
                    <div className="flex items-center gap-4">
                        <div>
                            <h1>+8801309085965</h1>
                            <h1>+8801309085965</h1>
                        </div>
                        <div className="bg-black/30 p-2 rounded">
                            <BiPhoneCall size={36} />
                        </div>
                    </div>
                </div>

                {/* Company Information */}
                <div
                    onClick={() => {
                        setCompanyInfoOpen(true);
                        setProductInfoOpen(false);
                        setPaymentInfoOpen(false);
                        setBankInfoOpen(false);
                        setClosingInfoOpen(false);
                    }}
                    className="border border-gray-300 mt-3"
                >
                   
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-blue-100">
                                <th colSpan={2} className="border border-gray-300 px-4 py-2 w-[50%]">
                                    Company Information
                                </th>
                                <th colSpan={2} className="border border-gray-300 px-4 py-2 w-[50%]">
                                    Customer Info
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border-gray-300 px-4  text-left w-[15%]">Company</td>
                                <td className="border-gray-300 px-4  text-left w-[35%] break-words">
                                    {companyData.name}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left w-[15%]">Customer</td>
                                <td className="border-gray-300 px-4  text-left w-[35%] break-words">
                                    {companyData.customername}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-gray-300 px-4  text-left">Email</td>
                                <td className="border-gray-300 px-4  text-left break-words">
                                    {companyData.email}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left">
                                    CustomerID
                                </td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.customerid}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-gray-300 px-4  text-left">Phone</td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.phone}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left">Phone</td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.customerphone}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-gray-300 px-4  text-left">Address</td>
                                <td className="border-gray-300 px-4  text-left break-words">
                                    {companyData.address}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left">Address</td>
                                <td className="border-gray-300 px-4  text-left break-words">
                                    {companyData.customeraddress}
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={4} className="border-t-1 border-gray-300"></td>
                            </tr>

                            <tr>
                                <td className="border-gray-300 px-4  text-left">Invoice Date</td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.date}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left">
                                    Payment Date
                                </td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.paymentdate}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-gray-300 px-4  text-left">Invoice ID</td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.invoiceid}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left">
                                    Receipt ID
                                </td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.receiptid}
                                </td>
                            </tr>
                            <tr>
                                <td className="border-gray-300 px-4  text-left">Salesman</td>
                                <td className="border-gray-300 px-4  text-left break-words">
                                    {companyData.salesman}
                                </td>
                                <td className="border-l border-gray-300 px-4  text-left">
                                    Payment Method
                                </td>
                                <td className="border-gray-300 px-4  text-left">
                                    {companyData.paymentmethod}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <h1 className="mt-3 text-xl text-red-500 text-center">
                    Product Information
                </h1>

                {/* Product Information */}
                <div
                    onClick={() => {
                        setProductInfoOpen(true);
                        setCompanyInfoOpen(false);
                        setPaymentInfoOpen(false);
                        setBankInfoOpen(false);
                        setClosingInfoOpen(false);
                    }}
                    className="border border-gray-300 mt-3 cursor-pointer hover:bg-gray-50"
                >
                    <table className="min-w-full  border border-gray-300 text-center">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border border-gray-300 w-1/12 py-2">Serial</th>
                                <th className="border border-gray-300 w-1/12 py-2">Proposal</th>
                                <th className="border border-gray-300 w-1/3 py-2">Descriptions</th>
                                <th className="border border-gray-300 w-1/12 py-2">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(2)
                                .fill()
                                .map((_, i, arr) => {
                                    const isLastRow = i === arr.length - 1;
                                    return (
                                        <tr key={i} className="h-10">
                                            {isLastRow ? (
                                                <>
                                                    <td className="border border-gray-300 px-4 text-right" colSpan={3}>
                                                        Total
                                                    </td>
                                                    <td className="border border-gray-300 px-4">10000</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="w-50 border border-gray-300 px-4">1</td>
                                                    <td className="w-50 border border-gray-300 px-4">{productData.proposal}</td>
                                                    <td className="w-50 border border-gray-300 px-4 break-words">{productData.descriptions}</td>
                                                    <td className="w-50 border border-gray-300 px-4">{productData.total}</td>
                                                </>
                                            )}
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>

                <h1 className="mt-3 text-xl text-red-500 text-center">
                    Payment Information
                </h1>

                {/* Payment Information */}
                <div
                    onClick={() => {
                        setPaymentInfoOpen(true);
                        setCompanyInfoOpen(false);
                        setProductInfoOpen(false);
                        setBankInfoOpen(false);
                        setClosingInfoOpen(false);
                    }}
                    className="border border-gray-300 mt-3"
                >
                    <table className="min-w-full table-fixed border border-gray-300 text-center">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border border-gray-300 w-1/12 py-2">SI</th>
                                <th className="border border-gray-300 w-1/12 py-2">Date</th>
                                <th className="border border-gray-300 w-1/3 py-2">Details</th>
                                <th className="border border-gray-300 w-1/12 py-2">Receive By</th>
                                <th className="border border-gray-300 w-1/12 py-2">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array(2)
                                .fill()
                                .map((_, i) => (
                                    <tr key={i} className="h-10">
                                        <td className="border border-gray-300 px-4">1</td>
                                        <td className="border border-gray-300 px-4">{paymentData.paymentdate}</td>
                                        <td className="border border-gray-300 px-4 break-words">{paymentData.paymentdetails}</td>
                                        <td className="border border-gray-300 px-4 break-words">{paymentData.receive}</td>
                                        <td className="border border-gray-300 px-4">{paymentData.amount}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                {/* Bank Information */}
                <div
                    onClick={() => {
                        setBankInfoOpen(true);
                        setPaymentInfoOpen(false);
                        setCompanyInfoOpen(false);
                        setProductInfoOpen(false);
                        setClosingInfoOpen(false);
                    }}
                    className="border border-gray-300 mt-3"
                >
                    <table className="min-w-full table-fixed border border-gray-300 text-center">
                        <thead>
                            <tr className="bg-blue-100">
                                <th colSpan={2} className="border border-gray-300 px-4 py-2">Bank Information</th>
                                <th colSpan={2} className="border border-gray-300 px-4 py-2">Transaction Information</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Bank</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.bankname}</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Transation ID</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.transationid}</td>
                            </tr>
                            <tr>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Branch</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.branch}</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Transation From</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.transationfrom}</td>
                            </tr>
                            <tr>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Account No</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.accountno}</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Transaction Type</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.transactiontype}</td>
                            </tr>
                            <tr>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">Account Name</td>
                                <td className="border w-50 border-gray-300 px-4 py-2 text-left">{bankData.accountname}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <h1 className="mt-3 text-xl text-red-500 text-center">
                    Closing Calculation
                </h1>

                {/* Closing Calculation */}
                <div
                    onClick={() => {
                        setClosingInfoOpen(true);
                        setCompanyInfoOpen(false);
                        setProductInfoOpen(false);
                        setPaymentInfoOpen(false);
                        setBankInfoOpen(false);
                    }}
                    className="border border-gray-300 mt-3"
                >
                    <table className="min-w-full table-fixed border border-gray-300 text-center">
                        <thead>
                            <tr className="bg-blue-100">
                                <th className="border border-gray-300 px-4 py-2">Total Amount</th>
                                <th className="border border-gray-300 px-4 py-2">Paid Amount</th>
                                <th className="border border-gray-300 px-4 py-2">Due Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 ">{closingdata.totalamount}</td>
                                <td className="border border-gray-300 px-4 py-2 ">{closingdata.paidamount}</td>
                                <td className="border border-gray-300 px-4 py-2 ">{closingdata.dueamount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="border border-gray-300 mt-3">
                    <table className="min-w-full table-fixed border border-gray-300 text-center">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 h-40"></th>
                                <th className="border border-gray-300 px-4 py-2 h-40"></th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2 font-semibold text-center">SIGNATURE</td>
                                <td className="border border-gray-300 px-4 py-2 font-semibold text-center">SIGNATURE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {(companyinfoopen || productinfoopen || paymentinfoopen || bankinfoopen || closinginfoopen) && (
                <div className="absolute right-0 top-0 w-4/12 h-full border-2 border-gray-300 bg-white overflow-y-scroll">
                    {companyinfoopen && (
                        <CompanyInfo
                            open={companyinfoopen}
                            setCompanyInfoOpen={setCompanyInfoOpen}
                            companyData={companyData}
                            setCompanyData={setCompanyData}
                        />
                    )}
                    {productinfoopen && (
                        <ProductInfo
                            open={productinfoopen}
                            setProductInfoOpen={setProductInfoOpen}
                            productData={productData}
                            setProductData={setProductData}
                        />
                    )}
                    {paymentinfoopen && (
                        <PaymentInfo
                            open={paymentinfoopen}
                            setPaymentInfoOpen={setPaymentInfoOpen}
                            paymentData={paymentData}
                            setPaymentData={setPaymentData}
                        />
                    )}
                    {bankinfoopen && (
                        <BankInfo
                            open={bankinfoopen}
                            setBankInfoOpen={setBankInfoOpen}
                            bankData={bankData}
                            setBankData={setBankData}
                        />
                    )}
                    {closinginfoopen && (
                        <ClosingInfo
                            open={closinginfoopen}
                            setClosingInfoOpen={setClosingInfoOpen}
                            closingdata={closingdata}
                            setClosingData={setClosingData}
                        />
                    )}
                </div>
            )}

        </div>
    );
};

export default Invoice;
