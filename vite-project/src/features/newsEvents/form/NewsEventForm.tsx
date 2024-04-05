import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import agent from "../../../app/api/agent";
import { Article } from "../../../app/models/Article";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { Content } from "../../../app/models/Content";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import MyDateInput from "../../../app/common/form/MyDateInput";

// eslint-disable-next-line react-refresh/only-export-components
const NewsEventForm = () => {
  const { contentStore } = useStore();
  const { loading, deleteContent, loadContent, loadingInitial } = contentStore;

  const { id } = useParams();

  const [content, setContent] = useState<Content>({
    id: "",
    title: "",
    description: "",
    createAt: new Date(),
    status: true,
    articleId: "",
    article: [],
  });

  const validationSchema = Yup.object({
    title: Yup.string().required("This Content Title is required"),
    description: Yup.string().required("This Content description is required"),
    createAt: Yup.date().required("This Content createAt is required"),
    articleId: Yup.string().required("Please Select article Name "),
  });

  const [articles, setArticle] = useState<Article[]>([]);
  const [target, setTarget] = useState("");

  const options = articles.map(function (article) {
    return { value: article.id, label: article.articleName };
  });

  function handleContentDelete(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e: any,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteContent(id);
  }

  useEffect(() => {
    if (id) loadContent(id).then((content) => setContent(content!));
    agent.Article.list().then((article) => {
      setArticle(article);
    });
  }, [id, loadContent]);

  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   content.id ? updateContent(content) : createContent(content);
  //   e.preventDefault();
  // }

  // function handleChange(
  //   event: ChangeEvent<
  //     | HTMLInputElement
  //     | HTMLTextAreaElement
  //     | HTMLOptionsCollection
  //     | HTMLSelectElement
  //   >
  // ) {
  //   const { name, value }: any = event.target;
  //   setContent({ ...content, [name]: value });
  // }

  if (loadingInitial) return <LoadingComponent />;
  return (
    <div className="2xl:px-96 p-5">
      <Typography placeholder={""} variant="h4" color="blue-gray">
        News & Events
      </Typography>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={content}
        onSubmit={(values) => console.log(values.article)}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="w-full justify-center items-center"
          >
            <MyTextInput name="title" placeholder="Title" />
            <MyTextArea name="description" placeholder="Description" />
            <MyDateInput
              placeholderText="Date"
              name={"createAt"}
              showTimeSelect
              timeCaption="time"
              dateFormat={"MMMM d,yyyy h:mm aa"}
            />
            <MySelectInput
              placeholder={"Select Article"}
              name="article"
              options={options}
            />
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default observer(NewsEventForm);
