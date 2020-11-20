import React, { useState } from 'react';
import { Modal } from 'components';
const useModal = ({ title, description, onApply }) => {
  const [visibleModal, setVisibleModal] = useState(false);

  const hideModal = () => setVisibleModal(false);
  const showModal = () => setVisibleModal(true);

  return {
    Modal: visibleModal ? (
      <Modal
        title={title}
        description={description}
        onApply={() => {
          onApply();
          hideModal();
        }}
        onCancel={() => hideModal()}
      />
    ) : null,
    showModal,
  };
};

export default useModal;
