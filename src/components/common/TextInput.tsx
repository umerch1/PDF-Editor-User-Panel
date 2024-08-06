import React,{memo} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
interface TextInputType {
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  name: string;
  placeholder: string;
  labelName: string;
  htmlFor: string;
  eye?: boolean;
}

const TextInput = ({
  value,
  onChange,
  type,
  name,
  placeholder,
  labelName,
  htmlFor,
  eye,
}: TextInputType) => {
  const [view, setView] = React.useState<boolean>(false);
  if (view == true && eye===true) {
    type = "password";
  } else {
    type = "text";
  }
  return (
    <div className="relative">
      <label
        htmlFor={htmlFor}
        className="textStyle text-sm text-white m-0 inline"
      >
        {labelName}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        placeholder={placeholder}
        className="bg-gray-50 border m-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
      {eye && (
        <div className="absolute right-3 bottom-3">
          <button onClick={(e) => {
            e.preventDefault();
            setView(!view)}}>
            {view ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(TextInput);

