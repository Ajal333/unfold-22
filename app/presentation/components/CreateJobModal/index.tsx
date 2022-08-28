import { Button, Input, Modal, Row, Text } from "@nextui-org/react";
import React from "react";

interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
}

const CreateJobModal = ({ setModalVisible, modalVisible }: Props) => {
  return (
    <Modal
      closeButton
      aria-labelledby="Apply-Job-Modal"
      open={modalVisible}
      onClose={() => setModalVisible(false)}
    >
      <Modal.Header>
        <Text b id="modal-title" size={18}>
          Create Job
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input label="Job Title" />
        <Input label="Job Type" />
        <Input label="Short Description" />
        <Input.Textarea label="Long Description" />
        <Row>
          <Input label="Payment Range (From)" className="mr-2" />
          <Input label="Payment Range (To)" className="ml-2" />
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setModalVisible(false)}>
          Close
        </Button>
        <Button auto onClick={() => setModalVisible(false)}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateJobModal;
