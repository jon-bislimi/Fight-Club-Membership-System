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
        className={`bg-white text-black h-screen transition-all duration-300 shadow-md border-r border-gray-200 ${
          isOpen ? "w-48 sm:w-64" : "w-14 sm:w-16"
        } flex flex-col`}
      >
        {/* LOGO HEADER */}
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            isOpen ? "py-0 px-0" : "py-8 px-0"
          }`}
        >
          <Image
            src="/CellActive.png"
            alt="CellActive Logo"
            width={isOpen ? 140 : 60}
            height={isOpen ? 90 : 60}
            className={`object-contain transition-all duration-300 ${
              isOpen ? "w-full max-w-sm" : "w-full"
            }`}
            priority
          />
        </div>

        <div className="flex-1 overflow-y-auto px-2 sm:px-4 pt-0">
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
        </div>
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
