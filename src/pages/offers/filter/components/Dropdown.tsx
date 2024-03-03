// Dropdown.tsx
import { FC, useState, useRef, useEffect } from 'react';
import arrow_down from '../../../../assets/arrow_down.png'


interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
  placeHolder?:string;
}

const Dropdown: FC<DropdownProps> = ({ options, onSelect , placeHolder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-button flex-items gap-2 cursor-pointer" onClick={toggleDropdown}>
        {selectedOption || placeHolder}
        <img src={arrow_down} alt="" />
      </div>
      {isOpen && (
        <ul className="dropdown-options mt-2 border-0">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
