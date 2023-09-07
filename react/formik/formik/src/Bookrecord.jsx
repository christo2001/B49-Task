import React, { useContext, useState } from 'react';
import { Namecontext } from './Context';
import Modal from 'react-modal';
import './Bookrec.css';

const customStyles = {
  content: {
    width: '80%',
    maxWidth: '400px',
    margin: 'auto',
  },
};

Modal.setAppElement('#root');

const Bookrecord = () => {
  const { Name, setname } = useContext(Namecontext);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({
    title: '',
    author: '',
    number: '',
    selectedDate: new Date(),
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setModalIsOpen(true);
    setEditIndex(index);
    setEditedData(Name[index]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditIndex(-1);
    setEditedData({
      title: '',
      author: '',
      number: '',
      selectedDate: new Date(),
    });
  };

  const handleSave = () => {
    const updatedName = [...Name];
    updatedName[editIndex] = editedData;
    setname(updatedName);
    closeModal();
  };

  const handleDelete = (index) => {
    const updatedName = [...Name];
    updatedName.splice(index, 1);
    setname(updatedName);
  };

  return (
    <div>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN Number</th>
            <th>Selected Date</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {Name.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.number}</td>
              <td>{item.selectedDate.toDateString()}</td>
              <td>
                <button onClick={() => openModal(index)}>Edit</button>
              </td>
              <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="outbox">
        <div className="modal">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal-container"
            contentLabel="Edit Modal"
          >
            <h2 className="text-center">Edit Name</h2>
            <input
              type="text"
              value={editedData.title}
              onChange={(e) =>
                setEditedData({ ...editedData, title: e.target.value })
              }
              placeholder="Edit title Name"
            />
            <input
              type="text"
              value={editedData.author}
              onChange={(e) =>
                setEditedData({ ...editedData, author: e.target.value })
              }
              placeholder="Edit author Name"
            />
            <input
              type="text"
              value={editedData.number}
              onChange={(e) =>
                setEditedData({ ...editedData, number: e.target.value })
              }
              placeholder="Edit isbn number Name"
            />
            <input
              type="date"
              value={editedData.selectedDate.toISOString().split('T')[0]}
              onChange={(e) =>
                setEditedData({
                  ...editedData,
                  selectedDate: new Date(e.target.value),
                })
              }
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={closeModal}>Cancel</button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Bookrecord;
