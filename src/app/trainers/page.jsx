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
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Trainers Management
            </h1>
            <p className="text-sm text-gray-500">Manage all trainers</p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
          >
            + Add Trainer
          </button>
        </div>

        <table className="w-full border rounded-xl overflow-hidden">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">Trainer</th>
              <th className="px-6 py-4 text-left">Specialty</th>
              <th className="px-6 py-4 text-left">Contact</th>
              <th className="px-6 py-4 text-center">Students</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                      {getInitials(trainer.name)}
                    </div>
                    <div>
                      <p className="font-medium">{trainer.name}</p>
                      <p className="text-sm text-gray-500">{trainer.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 font-medium">{trainer.specialty}</td>

                <td className="px-6 py-4 text-sm">{trainer.phone}</td>

                <td className="px-6 py-4 text-center">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {trainer.students}
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleDelete(trainer.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
