import React from "react";
import Breadcrumb from "../Component/Breadcrumb";
import Header from "../Header/Header";
import men from "../../images/Rectangle_18.svg";
import Colors from "../../utils/Colors";
import { BsCreditCardFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import paytm from "../../images/paytm.svg";
import gpay from "../../images/gpay.svg";
import phonepay from "../../images/phonepay.svg";
import mobikwik from "../../images/mobikwik.svg";

const Payment = () => {
    return (
        <div className="min-h-half">
            <Header />
            <div
                className="w-full hidden lg:block"
                style={{
                    borderColor: "rgba(0, 16, 60, 0.15)",
                    backgroundColor: "rgba(0, 16, 60, 0.15)",
                    borderWidth: 0.5,
                    borderStyle: "solid",
                }}
            />
            <div className="ml-4 mt-8 lg:ml-24">
                <Breadcrumb navigations={["Our Mentors", "Kapil Batra", "Book Now"]} />
            </div>
            <div className="px-4 mt-6 md:px-16 lg:px-24 flex flex-col lg:flex-row">
                <div className="flex flex-row lg:flex-col">
                    <div className="w-20 h-24 lg:w-72 lg:h-72 lg:mt-12 lg:ml-24">
                        <img src={men} />
                    </div>
                    <div className="px-4 lg:ml-20">
                        <p className="font-primayfont font-bold text-base text-dark-blue lg:text-4xl">
                            Kapil Batra 😇
                        </p>
                        <p className="font-primayfont font-normal text-sm text-dark-blue mt-2 lg:text-2xl">
                            Mentorship Program
                        </p>
                        <p className="font-primayfont font-bold text-xl text-dark-blue mt-4 lg:text-4xl">
                            ₹4999/month
                        </p>
                    </div>
                </div>
                <hr className="mt-5 lg:hidden" style={{ color: Colors.hrgrey }} />
                <div className="flex flex-col">
                    <div
                        className="rounded-lg w-full mt-6 px-3 pt-4 mb-4 flex flex-col"
                        style={{ background: Colors.bg_color }}
                    >
                        <p className="font-primayfont font-bold text-base text-dark-blue">
                            Enter A Promo Code
                        </p>
                        <input
                            type="text"
                            className="border-1 border-textInputBorder py-4 px-4 text-dark-blue font-primayfont text-sm outline-white rounded-lg mt-2"
                            placeholder="CTYBHAKSLG"
                        />
                        <button
                            className="text-white rounded-lg mt-4 py-3 w-full font-primayfont font-bold text-base"
                            style={{
                                background: "linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                            }}
                        >
                            Apply
                        </button>
                    </div>
                    <div
                        className="rounded-lg pb-4 px-3 mb-14 w-full"
                        style={{ background: Colors.bg_color }}
                    >
                        <div className="flex flex-row  pt-4 lg:w-full">
                            <input
                                type="radio"
                                name="upi_id"
                                className=""
                                style={{
                                    borderColor: Colors.border,
                                }}
                            />
                            <p className="font-primayfont font-bold text-xl text-dark-blue ml-3">
                                UPI ID
                            </p>
                        </div>
                        <p className="mt-2 text-sm">Enter Your UPI ID</p>
                        <input
                            type="text"
                            className="rounded-lg border-1 px-4 py-4 outline-white mt-2 w-full"
                            style={{
                                borderColor: Colors.border,
                            }}
                            placeholder="ABC.ybl"
                        />
                        <hr className="mt-4" style={{ color: Colors.hrgrey }} />
                        <div className="flex flex-row  pt-4">
                            <input type="radio" name="upi_id" className="" />
                            <p className="font-primayfont font-bold text-xl text-dark-blue ml-3">
                                Pay With Card
                            </p>
                        </div>
                        <p className="mt-3">Card number</p>
                        <div
                            className="rounded-lg  border-2 flex flex-row pr-4   mt-2"
                            style={{
                                borderColor: Colors.border,
                            }}
                        >
                            <input
                                type="text"
                                className="w-full pl-4 border-none outline-none"
                            />
                            <BsCreditCardFill className=" mt-4" />
                        </div>
                        <p className="mt-6 text-sm">Cardholder name</p>
                        <input
                            type="text"
                            className="  rounded-lg border-2 pl-4 mt-2"
                            style={{
                                borderColor: Colors.border,
                            }}
                            placeholder="ex. jonathan"
                        />
                        <div className="flex flex-row mt-6">
                            <div className="w-1/2">
                                <p>Expiry date</p>
                                <input
                                    type="text"
                                    className=" pl-4 rounded-lg border-2"
                                    style={{
                                        borderColor: Colors.border,
                                    }}
                                    placeholder="MM / YYYY"
                                />
                            </div>
                            <div className="ml-4 w-1/2">
                                <div className="flex flex-row">
                                    <p>CVV/CVC</p>
                                    <AiOutlineQuestionCircle className="ml-6" />
                                </div>
                                <input
                                    type="text"
                                    className=" pl-4 rounded-lg border-2"
                                    style={{
                                        borderColor: Colors.border,
                                    }}
                                    placeholder="3-4 digits"
                                />
                            </div>
                        </div>

                        <hr className="mt-4 text-grey" />

                        <div className="flex flex-row  pt-4">
                            <input
                                type="radio"
                                name="upi_id"
                                className=" pl-4"
                                style={{
                                    borderColor: Colors.border,
                                }}
                            />
                            <p className="font-primayfont font-bold text-xl text-dark-blue ml-3">
                                Pay With Wallets
                            </p>
                        </div>

                        <div className="mt-7 ml-12">
                            <div className="flex flex-row">
                                <input type="radio" name="upi_id" className=" pl-4" />
                                <img className="ml-2" src={paytm} />

                                <input type="radio" name="upi_id" className="ml-9  pl-4" />
                                <img className="ml-2" src={gpay} />
                            </div>
                            <div className="flex flex-row mt-4  ">
                                <input type="radio" name="upi_id" className=" mt-1 pl-4" />
                                <img className="ml-2" src={phonepay} />

                                <input type="radio" name="upi_id" className="ml-5  mt-1 pl-4" />
                                <img className="ml-2" src={mobikwik} />
                            </div>
                            <p className="mt-3">Phone Number</p>
                            <input
                                type="text"
                                className=" mr-4 pl-4 rounded-lg border-2 mt-2"
                                style={{
                                    borderColor: Colors.border,
                                    width: 279,
                                }}
                                placeholder="Enter Your Phone"
                            />
                        </div>

                        <button
                            className="  rounded-lg border-2 mt-9 text-white font-primayfont font-bold text-base"
                            style={{
                                background:
                                    " linear-gradient(180deg, #2BC3FC 0%, #017EAC 100%)",
                            }}
                        >
                            Pay ₹4999
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
