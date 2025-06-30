import AuthPage from "../Pages/Auth/AuthPage";
import CompanySelection from "../Pages/CompanySelection/CompanySelection";
import AdminDashboard from "../Pages/Dashboard/adminDashboard";
import { Collaborators } from "../Pages/Dashboard/Options/CollaboratorsOption";
import {
  DashboardContent,
  DashboardUserContent,
} from "../Pages/Dashboard/Options/DashboardOption";
import {
  AdminProjects,
  UserProjects,
} from "../Pages/Dashboard/Options/ProjectsOption";
import { Settings } from "../Pages/Dashboard/Options/SettingsOption";
import { MenageTask, TaskOption } from "../Pages/Dashboard/Options/TaskOption";
import { TimeTracking } from "../Pages/Dashboard/Options/TimeTracking";
import UserDashboard from "../Pages/Dashboard/userDashboard";
import DemoPage from "../Pages/Demo/Demo";
import Home from "../Pages/Home/Home";
import LearnMore from "../Pages/LearnMore/LearnMore";
import Splash from "../Pages/SplashScreen";

export const Pages = {
  Splash,
  UserDash: {
    UserDashboard,
    DashboardUserContent,
    TimeTracking,
    TaskOption,
    UserProjects,
  },
  AdminDash: {
    AdminDashboard,
    DashboardContent,
    Collaborators,
    AdminProjects,
    MenageTask,
    Settings,
  },
  Site: {
    Home,
    LearnMore,
    DemoPage,
  },
  Auth: {
    AuthPage,
    CompanySelection,
  },
};
