import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import CookieModal from "../modals/CookieModal";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <CookieModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldCookie={props.cookie}
      />
    </div>
  );
};

export default UpdateButton;
