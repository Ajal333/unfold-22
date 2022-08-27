import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import React from "react";
import { BiLock, BiMailSend, BiMoney } from "react-icons/bi";

interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalVisible: boolean;
}

const ApplyJobModal = ({ setModalVisible, modalVisible }: Props) => {
  return (
    <Modal
      closeButton
      aria-labelledby="Apply-Job-Modal"
      open={modalVisible}
      onClose={() => setModalVisible(false)}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Apply to this{" "}
          <Text b size={18}>
            Job
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<BiMailSend fill="currentColor" />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Estimated cost"
          contentLeft={<BiMoney fill="currentColor" />}
        />
        <Input.Textarea
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Short pitch on how you will be a good fit for this role."
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setModalVisible(false)}>
          Close
        </Button>
        <Button auto onClick={() => setModalVisible(false)}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyJobModal;
