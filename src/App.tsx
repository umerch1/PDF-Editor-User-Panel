import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import CircularProgressBar from "./components/CircularProgressBar";
import routs from "./utilities/Routs";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Customers = lazy(() => import("./Pages/Customers"));
const Document = lazy(() => import("./Pages/Documents"));
const Transaction = lazy(() => import("./Pages/Transaction"));
const SignIn = lazy(() => import("./Pages/Auth/SignIn"));
const EditUser = lazy(() => import("./Pages/Auth/EditUser"));
const Home = lazy(() => import("./Pages/Passwordgenrator"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const Logout = lazy(() => import("./Pages/Auth/Logout"));
const ForgetPassword=lazy(()=>import("./Pages/Auth/ForgetPassword"));
const AdminSignIn=lazy(()=>import("./Pages/Auth/AdminSignIn"));
const ImageEditor=lazy(()=>import("./Pages/ImageEditor"));


const App = () => {
  return (
      <Router>
        <Suspense fallback={<CircularProgressBar />}>
          <Routes>
            <Route path={routs.HOME} element={<Home />} />
            {/* Auth */}
            <Route path={routs.SIGN_IN} element={<SignIn />} />
            <Route path={routs.ADMIN_SIGNIN} element={<AdminSignIn />} />
            <Route path={routs.SIGN_UP} element={<SignUp />} />
            <Route path={routs.LOGOUT} element={<Logout />} />
            <Route path={routs.EDITUSER} element={<EditUser />} />
            <Route path={routs.FORGETPASSWORD} element={<ForgetPassword/>}/>
            {/* Dashboard */}
            <Route path={routs.DASHBOARD} element={<Dashboard />} />
            <Route path={routs.USER} element={<Customers />} />
            <Route path={routs.DOCUMENT} element={<Document />} />
            <Route path={routs.TRANSACTION} element={<Transaction />} />
            <Route path={routs.IMAGE_EDITOR} element={<ImageEditor />} />

            {/* Charts */}
          </Routes>
        </Suspense>
      </Router>
  );
};
export default App;
