import { Divider, Pagination } from "@nextui-org/react";
import React from "react";
import PitchCard from "../../../presentation/components/PitchCard";
import ViewJob from "../../../presentation/components/ViewJob";

const Jobs = () => {
  return (
    <>
      <ViewJob actionBar={<></>} />
      <div className="mt-16">
        <div>
          <h3>Job Picthes</h3>
          {Array(5)
            .fill(0)
            .map((_, i) => i)
            .map((i) => (
              <PitchCard />
            ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
