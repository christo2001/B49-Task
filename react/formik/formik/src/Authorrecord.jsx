import React, { useContext, useState } from 'react';
import { Namecontext } from './Context';
import Modal from 'react-modal';
import './Authorrecord.css';

const customStyles = {
  content: {
    width: '80%',
    maxWidth: '400px',
    margin: 'auto',
  },
};

Modal.setAppElement('#root');

const Authorrecord = () => {
  const { Author, setauthor } = useContext(Namecontext);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedAuthor, setEditedAuthor] = useState({
    name: '',
    bio: '',
    birthdate: new Date(),
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setModalIsOpen(true);
    setEditIndex(index);
    setEditedAuthor(Author[index]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditIndex(-1);
    setEditedAuthor({
      name: '',
      bio: '',
      birthdate: new Date(),
    });
  };

  const handleSave = () => {
    const updatedAuthor = [...Author];
    updatedAuthor[editIndex] = editedAuthor;
    setauthor(updatedAuthor);
    closeModal();
  };

  const handleDelete = (indexToDelete) => {
    const updatedAuthor = [...Author];
    updatedAuthor.splice(indexToDelete, 1); // Remove the author at the specified index
    setauthor(updatedAuthor);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Bio</th>
            <th>Birthdate</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Author.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.bio}</td>
              <td>{item.birthdate.toDateString()}</td>
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

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-container"
        contentLabel="Edit Author Modal"
      >
        {/* ... Modal content ... */}
      </Modal>
    </div>
  );
};

export default Authorrecord;
