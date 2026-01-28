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
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Sports Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage all available sports and schedules
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow-sm hover:bg-blue-700 hover:shadow-md transition-all"
          >
            + Add Sport
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">
                  Sport Name
                </th>
                <th className="px-6 py-4 text-left font-semibold">Level</th>
                <th className="px-6 py-4 text-left font-semibold">Schedule</th>
                <th className="px-6 py-4 text-left font-semibold">Members</th>
                <th className="px-6 py-4 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sports.map((sport) => (
                <tr
                  key={sport.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{sport.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        levelColors[sport.level] || "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {sport.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">{sport.schedule}</td>
                  <td className="px-6 py-4">{sport.members}</td>
                  <td className="px-6 py-4 flex justify-center gap-3">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(sport.id)}
                      className="text-red-600 hover:text-red-800 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
