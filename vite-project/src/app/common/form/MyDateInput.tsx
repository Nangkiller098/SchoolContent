import { Typography } from "@material-tailwind/react";
import { useField } from "formik";
import Datepicker, { ReactDatePickerProps } from "react-datepicker";

export default function MyDateInput(props: Partial<ReactDatePickerProps>) {
  const [field, meta, helper] = useField(props.name!);
  return (
    <>
      <Datepicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(value) => helper.setValue(value)}
        className=" w-full"
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
