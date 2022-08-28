import { Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ApplyJobModal from "../../../presentation/components/ApplyJobModal";
import ViewJob from "../../../presentation/components/ViewJob";

const Job = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [saveJob, setSaveJob] = useState<boolean>(false);

  return (
    <>
      <ViewJob
        actionBar={
          <div>
            <Button
              onClick={() => setModalVisible(true)}
              className="my-4"
              color={"secondary"}
            >
              Apply for the position
            </Button>
            <Button
              icon={
                !saveJob ? (
                  <BsHeart fill={"currentColor"} />
                ) : (
                  <BsHeartFill fill="currentColor" />
                )
              }
              className="my-4"
              color={"secondary"}
              ghost
              onClick={() => setSaveJob((prev) => !prev)}
            >
              Save job
            </Button>
          </div>
        }
      />
      <ApplyJobModal {...{ setModalVisible, modalVisible }} />
    </>
  );
};

export default Job;
