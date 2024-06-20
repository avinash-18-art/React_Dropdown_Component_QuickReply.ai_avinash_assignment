import React, {useState} from 'react'
import Dropdown from './components/Dropdown'
import './App.css'

function App() {
  const [dropdownState, setDropdownState] = useState({
    label: 'Select an option',
    labelVisible: true,
    status: 'unfilled',
    labelIconVisible: false,
    leftIconVisible: false,
    helperText: 'Please choose an option from the dropdown',
    required: false,
    text: '',
    type: 'SingleNoIcon',
    activeItemIndex: -1,
    items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  })

  const handleItemSelect = selectedIndex => {
    setDropdownState({
      ...dropdownState,
      activeItemIndex: selectedIndex,
      text: dropdownState.items[selectedIndex],
    })
  }

  return (
    <div className="App">
      <Dropdown
        label={dropdownState.label}
        labelVisible={dropdownState.labelVisible}
        status={dropdownState.status}
        labelIconVisible={dropdownState.labelIconVisible}
        leftIconVisible={dropdownState.leftIconVisible}
        helperText={dropdownState.helperText}
        required={dropdownState.required}
        text={dropdownState.text}
        type={dropdownState.type}
        activeItemIndex={dropdownState.activeItemIndex}
        items={dropdownState.items}
        onItemSelect={handleItemSelect}
      />
    </div>
  )
}

export default App
