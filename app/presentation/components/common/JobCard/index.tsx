import React from "react";

const JobCard = () => {
  return (
    <div className="shadow-md rounded-[6px] p-4 my-4">
      <h2 className="text-xl">
        (Long-term) Django Developer for Large Project
      </h2>
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
