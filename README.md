# React Dropdown Component

This project demonstrates a customizable Dropdown component built using React and TypeScript, integrated with Storybook for UI development and testing.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Storybook](#storybook)
- [Props](#props)
- [Development](#development)
- [License](#license)

## Introduction

The Dropdown component allows users to select options from a list. It supports various states, including filled, unfilled, disabled, and error states. The component is fully customizable via props and can be viewed and interacted with in different states using Storybook.

## Features

- Customizable label and helper text
- Supports different states: unfilled, filled, disabled, error
- Option to display icons
- Supports single selection (with or without icons) and multiple selection
- Fully integrated with Storybook for interactive UI development

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/avinash-18-art/React_Dropdown_Component_QuickReply.ai_avinash_assignment.git
   cd react-dropdown-component
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Storybook

1. Start Storybook:

   ```bash
   npm run storybook
   ```

2. Open [http://localhost:6006](http://localhost:6006) to view the interactive Storybook interface.

## Props

The Dropdown component accepts the following props:

- `label` (string): The label for the dropdown.
- `labelVisible` (boolean): Whether the label is visible.
- `status` (string): The status of the dropdown ('unfilled', 'filled', 'disabled', 'error').
- `labelIconVisible` (boolean): Whether the label icon is visible.
- `leftIconVisible` (boolean): Whether the left icon in the input box is visible.
- `helperText` (string): Helper text shown below the input box.
- `required` (boolean): Whether the dropdown is required.
- `text` (string): Text shown within the input box.
- `type` (string): Type of the dropdown ('SingleNoIcon', 'SingleRadio', 'Multi').
- `activeItemIndex` (number): Index of the item to be shown in the active state. -1 means no item in the active state.
- `items` (array): List of textual items to be shown in the dropdown.
- `onItemSelect` (function): Callback function triggered when an item is selected.

## Development

### Folder Structure

src/ components/ Dropdown/ Dropdown.tsx Dropdown.stories.tsx Dropdown.scss index.tsx App.tsx .storybook/ main.js preview.js

### Commands

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run storybook`: Starts the Storybook interface.
- `npm run build-storybook`: Builds the Storybook static files.

## License

This project is licensed under the MIT License.
