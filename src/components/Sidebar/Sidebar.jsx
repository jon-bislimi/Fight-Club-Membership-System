"use client";

import { useState } from "react";
import SidebarItem from "./SidebarItem";
import { FaTachometerAlt, FaUsers } from "react-icons/fa";
import { GiBoxingGlove, GiWeightLiftingUp } from "react-icons/gi";
import Image from "next/image";
import SidebarDropdown from "./SidebarDropdown";
import Modal from "../Forms/Modal";
import MemberForm from "../Forms/MemberForm";
import SportForm from "../Forms/SportForm";
import TrainerForm from "../Forms/TrainerForm";

const Sidebar = ({ isOpen }) => {
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [showSportModal, setShowSportModal] = useState(false);
  const [showTrainerModal, setShowTrainerModal] = useState(false);

  const handleAddMember = () => {
    setShowMemberModal(true);
  };

  const handleAddSport = () => {
    setShowSportModal(true);
  };

  const handleAddTrainer = () => {
    setShowTrainerModal(true);
  };

  return (
    <>
      <aside
        className={`bg-white text-black h-screen p-4 transition-all duration-300 shadow-md border-r border-gray-200 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-3 mb-8">
          <Image
            src="/download (4).png"
            alt="CellActive"
            width={64} // gjërësia fikse
            height={56} // lartësia fikse
            className="object-contain"
          />

          {isOpen && (
            <span className="text-xl font-bold tracking-wide font-sans">
              CellActive
            </span>
          )}
        </div>

        <SidebarItem
          icon={<FaTachometerAlt />}
          title="Dashboard"
          link="/"
          isOpen={isOpen}
        />

        <SidebarDropdown
          isOpen={isOpen}
          icon={<GiBoxingGlove />}
          title="Sports"
          items={[
            { type: "link", label: "List of Sports", href: "/sports" },
            { type: "action", label: "+ Add New", onClick: handleAddSport },
          ]}
        />

        <SidebarDropdown
          icon={<GiWeightLiftingUp />}
          title="Trainers"
          isOpen={isOpen}
          items={[
            { type: "link", label: "List of Trainers", href: "/trainers" },
            { type: "action", label: "+ Add New", onClick: handleAddTrainer },
          ]}
        />

        <SidebarDropdown
          icon={<FaUsers />}
          title="Members"
          isOpen={isOpen}
          items={[
            { type: "link", label: "List of Members", href: "/members" },
            { type: "action", label: "+ Add New", onClick: handleAddMember },
          ]}
        />
      </aside>

      {/* Modals */}
      <Modal
        isOpen={showMemberModal}
        onClose={() => setShowMemberModal(false)}
        title="Add Member"
      >
        <MemberForm onSubmit={() => setShowMemberModal(false)} />
      </Modal>

      <Modal
        isOpen={showSportModal}
        onClose={() => setShowSportModal(false)}
        title="Add Sport"
      >
        <SportForm onSubmit={() => setShowSportModal(false)} />
      </Modal>

      <Modal
        isOpen={showTrainerModal}
        onClose={() => setShowTrainerModal(false)}
        title="Add Trainer"
      >
        <TrainerForm onSubmit={() => setShowTrainerModal(false)} />
      </Modal>
    </>
  );
};

export default Sidebar;
