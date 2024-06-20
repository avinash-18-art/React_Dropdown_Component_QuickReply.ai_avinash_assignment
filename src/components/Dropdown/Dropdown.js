import React, { useState, useEffect, useRef } from 'react';
import { UserCircle, Info } from 'phosphor-react';
import './Dropdown.css';

type DropdownType = 'SingleNoIcon' | 'SingleRadio' | 'Multi';

interface DropdownProps {
  label: string;
  labelVisibility: 'Visible' | 'Hidden';
  status: 'Unfilled' | 'Filled' | 'Disabled' | 'Error';
  labelIconVisibility: 'Visible' | 'Hidden';
  leftIconVisibility: 'Visible' | 'Hidden';
  helperText: string;
  required: boolean;
  text: string;
  type: DropdownType;
  activeItemIndex: number;
  items: string[];
  onItemSelect?: (index: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  labelVisibility,
  status,
  labelIconVisibility,
  leftIconVisibility,
  helperText,
  required,
  text,
  type,
  activeItemIndex,
  items,
  onItemSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(activeItemIndex);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
    if (onItemSelect) onItemSelect(index);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const renderIcon = (IconComponent: React.FC) => (
    <IconComponent size={24} />
  );

  return (
    <div className={`dropdown ${status.toLowerCase()}`} ref={dropdownRef}>
      {labelVisibility === 'Visible' && (
        <label className="dropdown-label">
          {labelIconVisibility === 'Visible' && renderIcon(Info)}
          {label}{required && '*'}
        </label>
      )}
      <div
        className={`dropdown-control ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {leftIconVisibility === 'Visible' && renderIcon(UserCircle)}
        <input
          type="text"
          value={selectedIndex >= 0 ? items[selectedIndex] : text}
          readOnly
          disabled={status === 'Disabled'}
        />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li
              key={index}
              className={`dropdown-item ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              {type === 'SingleRadio' && <input type="radio" checked={selectedIndex === index} readOnly />}
              {type === 'Multi' && <input type="checkbox" checked={selectedIndex === index} readOnly />}
              {item}
            </li>
          ))}
        </ul>
      )}
      {helperText && <p className="dropdown-helper">{helperText}</p>}
    </div>
  );
};

export default Dropdown;
