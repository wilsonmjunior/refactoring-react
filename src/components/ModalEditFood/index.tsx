import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

import { MadeFood } from '../Food'

interface ModalEditProps {
  setIsOpen: () => void
  handleUpdateFood: (food: MadeFood) => void
  isOpen: boolean
  editingFood: MadeFood
}

export function ModalEditFood({
  setIsOpen,
  handleUpdateFood,
  isOpen,
  editingFood
}: ModalEditProps) {
  const formRef = useRef(null);

  const handleSubmit = async (data: MadeFood) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
