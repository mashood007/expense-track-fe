"use client"; // Required for client-side interactivity

import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

interface Props {
  open: Boolean,
  setOpen: Function
}

const AddTransaction = ({ open, setOpen }: Props) => {
  // const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto">
      {/* Trigger Button */}

      {/* Dialog */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 w-[800px] rounded-lg shadow-lg relative">
            {/* Header */}
            <div className="mb-4">
              <h4 className="text-blue-gray-800 text-lg font-semibold">
                New Transaction
              </h4>
              <p className="text-gray-600 mt-1 text-sm">
                Keep your records up-to-date and organized.
              </p>
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={toggleDialog}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="space-y-4 pb-6">
              <div>
                <label className="block text-left font-medium text-blue-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Rent Paid"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-left font-medium text-blue-gray-700 mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500">
                  <option>Clothing</option>
                  <option>Fashion</option>
                  <option>Watches</option>
                </select>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-left font-medium text-blue-gray-700 mb-2">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="eg. -500"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-left font-medium text-blue-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="px-4 py-2 border border-gray-300 w-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-left font-medium text-blue-gray-700 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="eg. This is a white shoe with a comfortable sole."
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                ></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
                onClick={toggleDialog}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTransaction;
