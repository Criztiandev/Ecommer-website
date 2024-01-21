import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  dir?: "left" | "right" | undefined;
  title?: string;
  icon?: string;
  onClick?: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={`bg-[#3686ff] text-white ${
        props.className ? props.className : null
      } btn text-normal`}>
      {props.dir && props.icon && props.dir === "left" && (
        <i className="w-6 h-6">{props.icon}</i>
      )}
      <span className="text-base">{props.title}</span>
      {props.dir && props.icon && props.dir === "right" && (
        <i className="w-6 h-6">{props.icon}</i>
      )}
    </button>
  );
};

export default Button;
