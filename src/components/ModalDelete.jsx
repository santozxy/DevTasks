
import Modal from 'react-modal';
import { toast } from 'react-toastify';

Modal.setAppElement('#root');

// eslint-disable-next-line react/prop-types
function ModalDelete({ setShowModal, removeTasks, id }) {

  function closeModal() {
    setShowModal(false)
  }

  const removeTask = () => {
    removeTasks(id)
    toast.success("Tarefa removida com sucesso", {
      theme: "dark"
    })
  }

  return (
    <div className='modal-container'>
      <Modal
        className='modal'
        isOpen={setShowModal}
        onRequestClose={closeModal}
        contentLabel="Modal de exemplo"
        overlayClassName="overlay"
      >
        <div>
          <h2>Deseja realmente excluir a tarefa?</h2>
          <p>A tarefa será excluída permanenentemente</p>
        </div>
        <div className='modal-options'>
          <button onClick={removeTask}>Sim</button>
          <button onClick={closeModal}>Não</button>

        </div>
      </Modal>
    </div>
  );
}

export default ModalDelete;