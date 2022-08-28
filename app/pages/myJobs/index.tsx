import { Input } from "@nextui-org/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import JobCard from "../../presentation/components/common/JobCard";

const MyJobs = () => {
  return (
    <div className="text-black w-full">
      <Input contentLeft={<BiSearch />} placeholder="Search..." />
      {Array(5)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <JobCard
            applied={true}
            appliedStatus={i % 2 === 0 ? "Accepted" : "Under Review"}
            key={i}
          />
        ))}
    </div>
  );
};

export default MyJobs;
