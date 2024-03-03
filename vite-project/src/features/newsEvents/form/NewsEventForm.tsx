/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Input,
  Select,
  Textarea,
  Typography,
  Option,
} from "@material-tailwind/react";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import { Article } from "../../../app/models/Article";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Content } from "../../../app/models/Content";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";

const NewsEventForm = () => {
  const { contentStore } = useStore();
  const {
    createContent,
    updateContent,
    loading,
    deleteContent,
    loadContent,
    loadingInitial,
  } = contentStore;

  const { id } = useParams();

  const [content, setContent] = useState<Content>({
    id: "",
    title: "",
    description: "",
    createAt: "",
    status: true,
    articleId: "",
    article: [],
  });

  const [articles, setArticle] = useState<Article[]>([]);
  const [target, setTarget] = useState("");

  function handleContentDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteContent(id);
  }

  useEffect(() => {
    if (id) loadContent(id).then((content) => setContent(content!));
    agent.Article.list().then((articles) => {
      setArticle(articles);
    });
  }, [id, loadContent]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    content.id ? updateContent(content) : createContent(content);
    e.preventDefault();
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
    setContent({ ...content, [name]: value });
  }
  if (loadingInitial) return <LoadingComponent />;
  return (
    <>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        News & Events
      </Typography>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="w-96 justify-center items-center"
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
            loading={loading}
            color="green"
            className=""
            fullWidth
            placeholder={undefined}
          >
            Create
          </Button>
          <Button
            name={content.id}
            color="red"
            loading={loading && target == content.id}
            fullWidth
            placeholder={undefined}
            onClick={(e) => handleContentDelete(e, content.id)}
          >
            Delete
          </Button>
          <Link to={`/content`}>
            {" "}
            <Button
              color="amber"
              className=""
              fullWidth
              placeholder={undefined}
            >
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
};

export default observer(NewsEventForm);
