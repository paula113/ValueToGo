import { useState } from 'react';

const useModal = () => {
  const [isLooking, setIsLooking] = useState(false);

  const hiddenModal = () => {
    setIsLooking(!isLooking);
  };
  return {
    hiddenModal,
    isLooking,
  };
};

export default useModal;
