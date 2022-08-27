import { Button, Input, Textarea } from "@nextui-org/react";
import { FormEventHandler, useState } from "react";

const CreateJob = () => {
  const [data, setData] = useState<{ [key: string]: string }>({});

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log({ data });
  };

  const handleChange = (e: any) => {
    console.log(e.target.value, e.target.name);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Create Job Post</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-[400px] mx-auto"
      >
        <label
          htmlFor="title"
          className="mt-[10px] mb-[5px] font-semibold text-[18px]"
        >
          Job Title
        </label>
        <Input
          id="title"
          name="title"
          placeholder="Job Title"
          className="max-w-[400px] w-full mx-auto"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="jobType"
          className="mt-[10px] mb-[5px] font-semibold text-[18px]"
        >
          Job Type
        </label>
        <Input
          id="jobType"
          name="jobType"
          placeholder="Job Type"
          className="max-w-[400px] w-full mx-auto"
          onChange={handleChange}
          required
        />
        <label
          htmlFor="description"
          className="mt-[10px] mb-[5px] font-semibold text-[18px]"
        >
          Job Description
        </label>
        <Textarea
          id="description"
          name="description"
          placeholder="Job Description"
          className="max-w-[400px] w-full mx-auto"
          rows={5}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="budget"
          className="mt-[10px] mb-[5px] font-semibold text-[18px]"
        >
          Total Budget
        </label>
        <Input
          id="budget"
          name="budget"
          placeholder="Budget"
          className="max-w-[400px] w-full mx-auto"
          onChange={handleChange}
          required
        />
        <Button className="mt-[20px]" type="submit">
          Post job
        </Button>
      </form>
    </div>
  );
};

export default CreateJob;
