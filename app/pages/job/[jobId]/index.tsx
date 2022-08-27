import { Button, Divider } from "@nextui-org/react";
import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
<<<<<<< HEAD:app/pages/jobs/[jobId].tsx
import ApplyJobModal from "../../presentation/components/ApplyJobModal";
import ViewJob from "../../presentation/components/ViewJob";
=======
import ApplyJobModal from "../../../presentation/components/ApplyJobModal";
>>>>>>> 06c846264ceb480a3c18226b312aaf07fd7035b4:app/pages/job/[jobId]/index.tsx

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
