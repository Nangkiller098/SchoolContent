import { Input, Typography } from "@material-tailwind/react";
import { useField } from "formik";

interface Props {
  placeholder: string;
  name: string;
  label?: string;
}
export default function MyTextInput(props: Props) {
  const [field, meta] = useField(props.name);
  return (
    <>
      {meta.touched && meta.error ? (
        <Input crossOrigin={undefined} {...field} {...props} size="md" error />
      ) : (
        <Input
          crossOrigin={undefined}
          {...field}
          {...props}
          size="md"
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
