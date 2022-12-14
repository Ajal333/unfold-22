import { Divider } from "@nextui-org/react";
import React from "react";

const ViewJob = ({ actionBar = <></> }: { actionBar?: JSX.Element }) => {
  return (
    <div className="flex">
      <div>
        <h3>Job Details</h3>
        <div>
          <p>Full Stack Development</p>
          <small>Renewed 1hr ago</small>
        </div>
        <p className="w-4/5 my-4">
          I have an interactive website that needs to be updated. The purpose of
          the site is to collect comments from users who are directed to the
          site. I would like a freelancer to propose a price for this work. At
          the site users log in with a username and password that I provide. The
          project to which they are assigned opens and user then adds one or
          more comments. There are multiple projects and multiple users so that
          login credentials ensures that the user accesses the correct project.
          I have admin rights on the site to set up projects, set up users,
          assign users to projects and download data collected. I need to make
          clear that I am not a website administrator, nor do I have deep skills
          in the technology.
        </p>
        <Divider className="w-4/5 my-4" />
        <div>
          <p>Duration: Less than 30hrs/week</p>
          <p>Job Type: Full-time, Immediate</p>
        </div>
      </div>
      {actionBar}
    </div>
  );
};

export default ViewJob;
