/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Input,
  Select,
  Textarea,
  Typography,
  Option,
} from "@material-tailwind/react";
import { Content } from "../../../app/models/Content";
import { ChangeEvent, useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import { Article } from "../../../app/models/Article";
import { useStore } from "../../../app/stores/store";

interface Props {
  createOrEdit: (content: Content) => void;
  deleteContent: (id: string) => void;
  submitting: boolean;
}

const NewsEventForm = ({ createOrEdit, deleteContent, submitting }: Props) => {
  const { contentStore } = useStore();
  const { selectedContent, closeForm } = contentStore;
  const initialState = selectedContent ?? {
    id: "",
    title: "",
    description: "",
    createAt: "",
    status: true,
    articleId: "",
    article: [],
  };
  const [content, setContents] = useState(initialState);
  const [articles, setArticle] = useState<Article[]>([]);

  useEffect(() => {
    agent.Article.list().then((articles) => {
      setArticle(articles);
    });
  }, []);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // console.log(content);
    event.preventDefault();
    createOrEdit(content);
  }

  function handleInputChange(
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLOptionsCollection
      | HTMLSelectElement
    >
  ) {
    const { name, value }: any = event.target;
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
            placeholder="please input your Title..."
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
          <Select
            color="blue"
            name="articleId"
            label="Select Article"
            placeholder={undefined}
            onChange={() => handleInputChange}
          >
            {articles.map((article) => (
              <Option value={article.id} key={article.id}>
                {article.articleName}
              </Option>
            ))}
          </Select>
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
