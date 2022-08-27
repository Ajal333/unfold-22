import { Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
import React from "react";
import { BiLock, BiMailSend, BiMoney } from "react-icons/bi";

interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<string>>;
  modalVisible: boolean;
}

const ReportModal = ({ setModalVisible, modalVisible }: Props) => {
  return (
    <Modal
      closeButton
      aria-labelledby="Apply-Job-Modal"
      open={modalVisible}
      onClose={() => setModalVisible("")}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Payment from{" "}
          <Text b size={18}>
            Techbyheart
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setModalVisible("")}>
          Close
        </Button>
        <Button auto onClick={() => setModalVisible("")}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReportModal;
