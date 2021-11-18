import { useState } from "react";
import IconButton from "../../Modal/IconButton";
import { ReactComponent as IconAddProject } from "../../Modal/IconButton/+.svg";
import { ReactComponent as Close } from "../../Modal/IconButton/+.svg";
import FormCreateProject from "../../Modal/FormCreateProject";
import Modal from "../../Modal";
import s from "./ProjectButtonAdd.module.css";

const ProjectButtonAdd = ({ text, description, className }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>{text}</h2>

        <IconButton
          onClick={toggleModal}
          aria-label="create project"
          className={className}
        >
          <IconAddProject />
        </IconButton>
        <p className={s.text}>{description}</p>
      </div>

      {showModal && (
        <Modal onClose={toggleModal}>
          <IconButton
            onClick={toggleModal}
            className="iconBtn"
            aria-label="close"
          >
            <Close />
          </IconButton>
          <FormCreateProject toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ProjectButtonAdd;