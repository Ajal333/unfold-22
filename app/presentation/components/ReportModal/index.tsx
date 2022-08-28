import { Badge, Button, Checkbox, Input, Modal, Row, Text } from "@nextui-org/react";
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
        <Badge className="m-auto" color={"success"}>$200</Badge>
        <p className="text-gray-600 m-auto leading-6 my-4">Techbyheart is a blockchain service based company which works collectively towards the liberation of south asian aeronautic engineers.</p>
        <Text className="m-auto flex">
          <Text b className="min-w-[80px]">Duration</Text>
          <Text className="min-w-[120px]">: &nbsp; 3 months</Text>
        </Text> 
        <Text className="m-auto flex">
          <Text b className="min-w-[80px]">Title</Text>
          <Text className="min-w-[120px]">: &nbsp; Web Dev Intern</Text>
        </Text> 
        <Text className="m-auto flex">
          <Text b className="min-w-[80px]">Rate</Text>
          <Text className="min-w-[120px]">: &nbsp; $40 hourly</Text>
        </Text>
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
