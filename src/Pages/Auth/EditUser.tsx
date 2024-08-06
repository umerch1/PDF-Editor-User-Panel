import SocialIcons from "../../components/SocialIcon";
import { Link } from "react-router-dom";
interface Authentication {
  titleName: string;
  signUp?: boolean;
  navigate:string;
  emailValue:string;
  setEmailValue:(e:string)=>void;
  setPasswordValue:(e:string)=>void;
  passwordValue:string;
  isError:boolean;
}
const EditUser = ({ titleName, signUp,navigate,emailValue,setEmailValue,passwordValue,setPasswordValue,isError }: Authentication) => {
  return (
    <div className=" w-auto min-h-screen flex justify-center items-center ">
      <div className=" bg-blueBg shadow-md border border-main rounded-lg h-5/6 max-w-sm p-4">
        <div className="flex flex-row items-center justify-center">
          <h3 className="textStyle mb-3 text-2xl text-center">{titleName}</h3>
        </div>
        {isError && <div className="text-red-500  text-sm text-center">Email/password is invalid</div>}
        {signUp && (
          <div>
            <label
              htmlFor="text"
              className="textStyle text-sm text-white m-0 inline"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border m-0  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Name"
              required
            />
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="textStyle text-sm text-white m-0 inline"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            value={emailValue}
            onChange={(e)=>setEmailValue(e.target.value)}
            id="email"
            className="bg-gray-50 border m-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="textStyle text-sm text-white m-0 inline"
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={passwordValue}
            onChange={(e)=>setPasswordValue(e.target.value)}
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border m-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex justify-between my-5">
          <div className="flex ">
            <div className="flex items-center h-5 ">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
           
            <label
              htmlFor="remember"
              className="textStyle text-white text-sm m-0 mx-3"
            >
              Remember me
            </label>
          </div> 
        </div>
        <button  className="buttonStyle text-xl font-bold w-full">
        Edit to your account
        </button>
      </div>
    </div>
  );
};

export default EditUser;
