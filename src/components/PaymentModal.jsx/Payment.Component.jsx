import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment } from "react";

const PaymentModel = ({ setIsOpen, isOpen, price }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const launchRazorPay = () => {
    if (window.Razorpay) {
      const options = {
        key: "rzp_test_Taf4Olo2TluDGc",
        amount: price * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie purchase or rental",
        image:
          "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        theme: { color: "#c4242d" },
        handler: () => {
          setIsOpen(false);
          alert("Payment Successful");
        },
      };
      const razorPay = new window.Razorpay(options);
      razorPay.open();
    } 
    else 
    {
      console.error("Razorpay SDK not loaded.");
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
            
          {/* Transition components */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">

              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Please make a payment
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Hello please click non the below button to make a payment.
                  </p>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={launchRazorPay}
                  >
                    Pay ₹{price}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel Payment
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

PaymentModel.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
};

export default PaymentModel;
