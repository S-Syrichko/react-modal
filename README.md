# tchiki-modal-react

## Description

Just another modal plugin for React. Supports ARIA attributes and is customisable by inline CSS styles.

## Table of Contents

* [Installation](#installation)
* [Properties](#properties)
* [Example](#example)

## Installation

To install, you can use [npm](https://npmjs.org/) :


    $ npm install tchiki-modal-react
    

## Properties

Here is a full list of properties accepted by the plugin : 


| Prop          | Type                  | Description                                                      | Default Value                                                  |
| ------------- | --------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------- |
| isOpen        | boolean               | Indicates whether the modal is open or closed.                    | -                                                              |
| onClose       | () => void            | Function called when the modal is closed.                         | -                                                              |
| closeButton  | React.ReactNode       | Custom React node for the modal's close button.                   | X                                                             |
| style         | object                | Object containing custom styles for the modal.                    | -|
| style.backdrop| React.CSSProperties   | Custom styles for the modal backdrop.                             | `{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 9998 }` |
| style.modal   | React.CSSProperties   | Custom styles for the modal itself.                               | `{ position: "relative", color: "#000", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", zIndex: 9999 }` |
| style.close   | React.CSSProperties   | Custom styles for the modal's close button.                       | `{ position: "absolute", top: "10px", right: "10px", cursor: "pointer" }` |

## Example

Here is a simple example of tchiki-modal-react being used in an app with some custom
styles and focusable input elements within the modal content:

```jsx
import { useState } from "react";
import { Modal } from "tchiki-modal-react";

const customStyles = {
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modal: {
    backgroundColor: "rgb(207, 255, 229)",
    height: "500px",
  },
  close: {
    backgroundColor: "#3EB489",
    width: "100px",
  },
};

const closeContent = <span>Close</span>;

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        closeButton={closeContent}
        style={customStyles}
      >
        <h1>It's a modal</h1>
        <p>An exemple of tchiki-modal-react.</p>
        <form
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;

```