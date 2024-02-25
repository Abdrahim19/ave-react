import "./multiactionbutton.css";
import { FC } from "react";

interface Action {
  label: string;
  icon: JSX.Element;
}

interface MultiActionButtonProps {
  actions: Action[];
}

const MultiActionButton:FC<MultiActionButtonProps> = ({ actions }) => {
  return (
    <div className="multi-button d-grid place-items-center mt-3">
      {actions.map((action, index) => (
        <button key={index} className="clr-blue-gray flex-items gap-4 fs-px_14 fw-medium ln-ht-17px" >
          {action.icon} {action.label}
        </button>
      ))}
    </div>
  );
};

export default MultiActionButton
