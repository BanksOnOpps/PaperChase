"use client";
import { TbHandFingerRight } from "react-icons/tb";
import Modal from "./modal/context/ModalContext";
import GameRules from "./GameRules";

function RulesSection() {
  return (
    <Modal>
      <div className="flex items-center justify-center gap-2 text-lg font-medium">
        <span>Quick Rules</span>
        <TbHandFingerRight className="flex-shrink-0" />:
        <Modal.Open opens="rules">
          <button className="text-brand-primary underline">
            Win Big, Play Smart!
          </button>
        </Modal.Open>
      </div>

      <Modal.Window name="rules">
        <GameRules />
      </Modal.Window>
    </Modal>
  );
}

export default RulesSection;
