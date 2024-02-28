import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { Content } from "../../../app/models/Content";
import { ChangeEvent, useState } from "react";

interface Props {
  content: Content | undefined;
  closeForm: () => void;
  createOrEdit: (content: Content) => void;
  deleteContent: (id: string) => void;
  submitting: boolean;
}

const NewsEventForm = ({
  content: selectedContent,
  closeForm,
  createOrEdit,
  deleteContent,
  submitting,
}: Props) => {
  const initialState = selectedContent ?? {
    id: "",
    title: "",
    description: "",
    createAt: "",
    status: true,
    article: [],
  };
  const [content, setContents] = useState(initialState);

  function handleSubmit() {
    // console.log(content);
    createOrEdit(content);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setContents({ ...content, [name]: value });
  }

  return (
    <>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        News & Events
      </Typography>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Title
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
            value={content.title}
            name="title"
            onChange={handleInputChange}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Description
          </Typography>

          <Textarea
            size="lg"
            placeholder=""
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={content.description}
            name="description"
            onChange={handleInputChange}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Date
          </Typography>

          <Input
            size="lg"
            placeholder=""
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin={undefined}
            value={content.createAt}
            name="createAt"
            onChange={handleInputChange}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Article
          </Typography>
          <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
            <option value="brazil">Brazil</option>
            <option value="bucharest">Bucharest</option>
            <option value="london">London</option>
            <option value="washington">Washington</option>
          </select>
          <Button
            type="submit"
            loading={submitting}
            color="green"
            className=""
            fullWidth
            placeholder={undefined}
          >
            Create
          </Button>
          <Button
            // content="Submit"
            color="red"
            className=""
            fullWidth
            placeholder={undefined}
            onClick={() => deleteContent(content.id)}
          >
            Delete
          </Button>
          <Button
            color="amber"
            onClick={() => closeForm()}
            className=""
            fullWidth
            placeholder={undefined}
          >
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewsEventForm;
