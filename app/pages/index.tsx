import { Button, Input, Navbar, Row } from "@nextui-org/react";
import type { NextPage } from "next";
import JobCard from "../presentation/components/common/JobCard";
import { BiSearch } from "react-icons/bi";
import CreateJobModal from "../presentation/components/CreateJobModal";
import { useState } from "react";

const Home: NextPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const isFreelancer = true;

  return (
    <div className="text-black">
      <Row justify="space-between">
        <Input contentLeft={<BiSearch />} placeholder="Search..." />
        {!isFreelancer && (
          <Button color={"secondary"} onClick={() => setModalVisible(true)}>
            Add New Job
          </Button>
        )}
      </Row>
      {Array(5)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <JobCard key={i} />
        ))}
      <CreateJobModal {...{ modalVisible, setModalVisible }} />
    </div>
  );
};

export default Home;
