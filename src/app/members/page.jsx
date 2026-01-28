"use client";

import { useState } from "react";
import Modal from "@/components/Forms/Modal";
import MemberForm from "@/components/Forms/MemberForm";

export default function MembersPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-800">Members</h3>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border border-gray-200 px-4 py-2 text-sm bg-white shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-md transition-shadow duration-200"
          />

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add New Member
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

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="py-3 px-4">
                <input type="checkbox" />
              </th>
              <th className="py-3 px-4">Deal ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Deal Value</th>
              <th className="py-3 px-4">Close Date</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="px-4 py-4">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-4 font-medium">DE124321</td>

              <td className="px-4 py-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-500 text-xs">johndoe@gmail.com</p>
                </div>
              </td>

              <td className="px-4 py-4">Software License</td>
              <td className="px-4 py-4">$18,50.34</td>
              <td className="px-4 py-4">2024-06-15</td>
              <td className="px-4 py-4">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                  Complete
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
