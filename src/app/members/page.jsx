"use client";

import { useState } from "react";
import Modal from "@/components/Forms/Modal";
import MemberForm from "@/components/Forms/MemberForm";

export default function MembersPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 sm:p-6">
      <div className="mb-4 flex flex-col gap-3">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Members</h3>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 rounded-lg border border-gray-200 px-3 sm:px-4 py-2 text-sm bg-white shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-md transition-shadow duration-200"
          />

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 whitespace-nowrap"
          >
            + Add Member
          </button>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title="Add Member"
          >
            <MemberForm onSubmit={() => setShowModal(false)} />
          </Modal>
        </div>
      </div>

      <div className="overflow-x-auto -mx-3 sm:-mx-0 sm:overflow-x-visible">
        <div className="inline-block min-w-full px-3 sm:px-0">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b text-gray-500 bg-gray-50">
              <tr>
                <th className="py-2 sm:py-3 px-2 sm:px-4">
                  <input type="checkbox" />
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">Deal ID</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 whitespace-nowrap">Customer</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 hidden sm:table-cell whitespace-nowrap">Product</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 hidden md:table-cell whitespace-nowrap">Value</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 hidden lg:table-cell whitespace-nowrap">Close Date</th>
                <th className="py-2 sm:py-3 px-2 sm:px-4">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-2 sm:px-4 py-2 sm:py-4">
                  <input type="checkbox" />
                </td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 font-medium text-xs sm:text-sm">DE124321</td>

                <td className="px-2 sm:px-4 py-2 sm:py-4 flex items-center gap-1 sm:gap-3">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold text-xs sm:text-base">
                    JD
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-medium text-xs sm:text-sm">John Doe</p>
                    <p className="text-gray-500 text-xs">johndoe@gmail.com</p>
                  </div>
                </td>

                <td className="px-2 sm:px-4 py-2 sm:py-4 hidden sm:table-cell text-xs sm:text-sm">Software License</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 hidden md:table-cell text-xs sm:text-sm">$18,50.34</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4 hidden lg:table-cell text-xs sm:text-sm">2024-06-15</td>
                <td className="px-2 sm:px-4 py-2 sm:py-4">
                  <span className="rounded-full bg-green-100 px-2 sm:px-3 py-1 text-xs font-semibold text-green-600 inline-block">
                    Complete
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
