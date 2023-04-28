import React, { useContext } from "react";

import { ReactComponent as DropdownIcon } from "../../../assets/dropdown.svg";


import modalOpenContext from "../../../context/modal-open-context";
import cn from "./index.module.css";

function Dropdown({
  dropDownKey,
  dropdownTitle,
  dropdownOptions = [],
  dropDownField,
  setDropDownField = () => { },
}) {
  const { isModalOpen, setModalOpen } = useContext(modalOpenContext);

  const toggleOpenDropdown = () => {
    setModalOpen(isModalOpen !== dropDownKey ? dropDownKey : null);
  };

  const handleSelect = (value) => {
    if (isModalOpen === dropDownKey) {
      setDropDownField(value);
      setModalOpen(null);
    }
  };

  return (
    <div className={cn.dropdown}>
      <div
        className={cn.dropdownTitle}
        style={{ color: isModalOpen === dropDownKey ? "red" : "black" }}
        onClick={toggleOpenDropdown}
      >
        {dropdownTitle}
        <DropdownIcon
          style={
            isModalOpen === dropDownKey ? { transform: "rotate(180deg)" } : null
          }
          className={cn.dropdownIcon}
          stroke={isModalOpen === dropDownKey ? "red" : "black"}
        />
      </div>
      {
        isModalOpen === dropDownKey ? (
          <div className={cn.dropdownContainer}>
            {dropdownOptions.map(({ label, value }) => (
              <div className={cn.dropdownOption} key={value}>
                <input
                  type="radio"
                  name={label}
                  value={value}
                  id={label}
                  checked={dropDownField === value}
                  onChange={() => handleSelect(value)}
                />
                <label htmlFor={label}>{label}</label>
              </div>
            ))}
          </div>
        ) : null
      }
    </div >
  );
}

export default Dropdown;
