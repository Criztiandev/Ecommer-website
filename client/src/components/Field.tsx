/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from "react";
import { useFormContext, FieldValues } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title?: string;
  default?: string | number;
}

const Field = (props: Props) => {
  const { register, formState, setValue } = useFormContext<FieldValues>();
  const { errors } = formState;

  const errorMessage: any = errors[props.name as string]?.message;

  if (props.default) {
    setValue(props.name, props.default);
  }

  return (
    <label
      className="grid gap-2 w-full"
      style={{ gridTemplateRows: `24px auto ${errorMessage && "24px"}` }}>
      {props.title && (
        <span className="text-base font-medium">{props.title}</span>
      )}
      <input
        {...props}
        {...register(props?.name)}
        className={`input input-bordered ${
          props.className ? props.className : ""
        } w-full ${errorMessage ? "input-error" : ""}`}
        autoComplete={`current-${props.name}`}
      />
      {errorMessage && (
        <span className="text-base text-error">{errorMessage}</span>
      )}
    </label>
  );
};

export default Field;
