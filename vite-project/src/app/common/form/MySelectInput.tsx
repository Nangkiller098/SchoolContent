import { Typography } from "@material-tailwind/react";
import { useField } from "formik";
import Select from "react-select";

interface Props {
  placeholder: string;
  name: string;
  options: { label?: string; value?: string }[];
}
export default function MySelectInput(props: Props) {
  const [field, meta, helpers] = useField(props.name);

  return (
    <>
      <Select
        {...props}
        onChange={(e) => helpers.setValue(e.value)}
        onBlur={() => helpers.setTouched(true)}
        options={props.options}
        defaultValue={field.value}
        placeholder={props.placeholder}
      />

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
