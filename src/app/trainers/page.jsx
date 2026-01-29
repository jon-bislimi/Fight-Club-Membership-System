"use client";

import { useState } from "react";
import Modal from "@/components/Forms/Modal";
import TrainerForm from "@/components/Forms/TrainerForm";
import { FaTrash } from "react-icons/fa";

export default function TrainersPage() {
  const [showModal, setShowModal] = useState(false);

  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "John Doe",
      specialty: "Boxing",
      email: "john@example.com",
      phone: "+383 45 123 456",
      students: 12,
    },
    {
      id: 2,
      name: "Maria Silva",
      specialty: "MMA",
      email: "maria@example.com",
      phone: "+383 45 234 567",
      students: 18,
    },
    {
      id: 3,
      name: "Alex Krasniqi",
      specialty: "Wrestling",
      email: "alex@example.com",
      phone: "+383 45 345 678",
      students: 15,
    },
  ]);

  const handleAddTrainer = () => setShowModal(false);

  const handleDelete = (id) => {
    setTrainers(trainers.filter((t) => t.id !== id));
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="p-2 sm:p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-md p-3 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 sm:mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Trainers Management
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Manage all trainers
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl hover:bg-blue-700 transition text-sm whitespace-nowrap"
          >
            + Add Trainer
          </button>
        </div>

        <div className="overflow-x-auto -mx-3 sm:-mx-0 sm:overflow-x-visible">
          <div className="inline-block min-w-full px-3 sm:px-0">
            <table className="w-full border rounded-xl overflow-hidden">
              <thead className="bg-gray-50 text-xs sm:text-sm text-gray-600">
                <tr>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left whitespace-nowrap">
                    Trainer
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden sm:table-cell whitespace-nowrap">
                    Specialty
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left hidden md:table-cell whitespace-nowrap">
                    Contact
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center whitespace-nowrap">
                    Students
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-center whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {trainers.map((trainer) => (
                  <tr
                    key={trainer.id}
                    className="border-b hover:bg-gray-50 text-xs sm:text-sm"
                  >
                    <td className="px-3 sm:px-6 py-3 sm:py-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-xs sm:text-base">
                          {getInitials(trainer.name)}
                        </div>
                        <div className="hidden sm:block">
                          <p className="font-medium text-xs sm:text-sm">
                            {trainer.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {trainer.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-3 sm:px-6 py-3 sm:py-4 hidden sm:table-cell font-medium text-xs sm:text-sm">
                      {trainer.specialty}
                    </td>

                    <td className="px-3 sm:px-6 py-3 sm:py-4 hidden md:table-cell text-xs sm:text-sm">
                      {trainer.phone}
                    </td>

                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                      <span className="bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold inline-block">
                        {trainer.students}
                      </span>
                    </td>

                    <td className="px-3 sm:px-6 py-3 sm:py-4 text-center">
                      <button
                        onClick={() => handleDelete(trainer.id)}
                        className="text-red-600 hover:bg-red-50 p-1 sm:p-2 rounded-lg transition inline-block"
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
          title="Add Trainer"
        >
          <TrainerForm onSubmit={handleAddTrainer} />
        </Modal>
      </div>
    </div>
  );
}
