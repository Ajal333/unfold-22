import { Input, Navbar } from "@nextui-org/react";
import type { NextPage } from "next";
import JobCard from "../presentation/components/common/JobCard";
import { BiSearch } from "react-icons/bi";

const Home: NextPage = () => {
  return (
    <div className="text-black">
      <Input contentLeft={<BiSearch />} placeholder="Search..." />
      {Array(5)
        .fill(0)
        .map((_, i) => i)
        .map((i) => (
          <JobCard key={i} />
        ))}
    </div>
  );
};

export default Home;
