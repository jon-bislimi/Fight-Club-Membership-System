"use client";

import { useState } from "react";
import Modal from "@/components/Forms/Modal";
import SportForm from "@/components/Forms/SportForm";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function SportsPage() {
  const [showModal, setShowModal] = useState(false);

  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  const [sports, setSports] = useState([
    {
      id: 1,
      name: "Boxing",
      level: "Beginner",
      schedule: "Mon, Wed, Fri - 6PM",
      members: 15,
    },
    {
      id: 7,
      name: "Judo",
      level: "Beginner",
      schedule: "Mon, Wed, Fri - 6PM",
      members: 15,
    },
    {
      id: 8,
      name: "muay Thai",
      level: "Beginner",
      schedule: "Mon, Wed, Fri - 6PM",
      members: 15,
    },
    {
      id: 2,
      name: "MMA",
      level: "Intermediate",
      schedule: "Tue, Thu - 7PM",
      members: 22,
    },
    {
      id: 3,
      name: "Wrestling",
      level: "Advanced",
      schedule: "Sat - 10AM",
      members: 8,
    },
    {
      id: 4,
      name: "KickBox",
      level: "Intermediate",
      schedule: "Wed, Fri - 5PM",
      members: 18,
    },
    {
      id: 5,
      name: "Karate",
      level: "Beginner",
      schedule: "Mon, Wed, Fri - 6PM",
      members: 12,
    },
  ]);

  const handleAddSport = () => {
    setShowModal(false);
    // Connect to backend
  };

  const handleDelete = (id) => {
    setSports(sports.filter((sport) => sport.id !== id));
  };

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-3 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Sports Management
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Manage all available sports and schedules
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-sm hover:bg-blue-700 hover:shadow-md transition-all text-sm whitespace-nowrap"
          >
            + Add Sport
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto -mx-3 sm:-mx-0 sm:overflow-x-visible">
          <div className="inline-block min-w-full px-3 sm:px-0">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold whitespace-nowrap">
                    Sport Name
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold whitespace-nowrap">
                    Level
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold hidden sm:table-cell whitespace-nowrap">
                    Schedule
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold hidden md:table-cell whitespace-nowrap">
                    Members
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {sports.map((sport) => (
                  <tr
                    key={sport.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-xs sm:text-sm">
                      {sport.name}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                      <span
                        className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                          levelColors[sport.level] ||
                          "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {sport.level}
                      </span>
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 hidden sm:table-cell text-xs sm:text-sm">
                      {sport.schedule}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 hidden md:table-cell text-xs sm:text-sm">
                      {sport.members}
                    </td>
                    <td className="px-3 sm:px-6 py-3 sm:py-4 flex justify-center gap-2 sm:gap-3">
                      <button className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-1 sm:p-2 rounded transition">
                        <FaEdit size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(sport.id)}
                        className="text-red-600 hover:text-red-800 hover:bg-red-50 p-1 sm:p-2 rounded transition"
                      >
                        <FaTrash size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Add Sport"
        >
          <SportForm onSubmit={handleAddSport} />
        </Modal>
      </div>
    </div>
  );
}
