import { Badge } from "@nextui-org/react";
import React from "react";

interface Props {
  applied?: boolean;
  appliedStatus?: string;
  pitchCount?: number;
}

const getStatusColor = (status: any): any => {
  switch (status) {
    case "Under Review":
      return "warning";
    case "Accepted":
      return "success";
    case "Rejected":
      return "error";
    default:
      return "warning";
  }
};

const JobCard = ({ applied, appliedStatus, pitchCount }: Props) => {
  return (
    <div className="shadow-md bg-white hover:shadow-lg duration-150 cursor-pointer ease-in transition-all  rounded-[6px] p-4 my-4">
      <div className="flex justify-between">
        <h2 className="text-xl">
          (Long-term) Django Developer for Large Project
        </h2>
        {applied && (
          <Badge
            isSquared
            variant={"flat"}
            color={getStatusColor(appliedStatus)}
          >
            {appliedStatus}
          </Badge>
        )}
        {pitchCount ? (
          <Badge isSquared variant={"flat"} color="success">
            Pitch Count: {pitchCount ?? 0}{" "}
          </Badge>
        ) : null}
      </div>
      <div className="flex text-gray-600 my-2">
        <div>Internship</div>
        <b className="mx-3 text-black">•</b>
        <div>$20 - $60 Hourly</div>
      </div>
      <p className="text-gray-400 leading-6 font-light">
        Looking for a python django developer with experience working on the
        following: - large codebases or large teams - highly complex,
        interesting, or problems at scale - DRF (django rest framework) - docker
        setup - redis
      </p>
    </div>
  );
};

export default JobCard;
