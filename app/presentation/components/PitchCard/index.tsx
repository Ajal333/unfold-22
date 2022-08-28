import { Collapse, Text } from "@nextui-org/react";
import React from "react";
import {
  BiCaretRightCircle,
  BiCheck,
  BiCheckCircle,
  BiChevronRightCircle,
  BiCrosshair,
  BiMinusCircle,
  BiPlusCircle,
} from "react-icons/bi";

const PitchCard = () => {
  return (
    <div className="rounded shadow-md px-6 my-4 flex items-center">
      <Collapse
        arrowIcon={<BiChevronRightCircle className="text-blue-400 text-xl" />}
        className="border-transparent p-0"
        title={
          <div>
            <Text b className="text-base">
              ajapoosatta@gmail.com
            </Text>
            <Text>$200</Text>
          </div>
        }
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </Collapse>
      <div className="flex text-xl">
        <BiCheckCircle className="mx-3 text-green-400 cursor-pointer" />
        <BiMinusCircle className="text-red-400 cursor-pointer" />
      </div>
    </div>
  );
};

export default PitchCard;
