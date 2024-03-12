import { Textarea, Typography } from "@material-tailwind/react";
import { useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
}
export default function MyTextArea(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <>
      {meta.touched && meta.error ? (
        <Textarea {...field} {...props} size="lg" error />
      ) : (
        <Textarea
          size="md"
          {...field}
          {...props}
          className=" focus:!border-t-gray-900"
        />
      )}
      {meta.touched && meta.error ? (
        <Typography
          variant="small"
          color="red"
          children={meta.error}
          placeholder={meta.error}
        />
      ) : null}
    </>
  );
}
