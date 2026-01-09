import { createBrowserRouter, Navigate } from "react-router";
import Themes from "../pages/themes";
import BuildNewTab from "../pages/buildNewTab";
import HowToBuild from "../pages/howToBuild";
import HowToUpload from "../pages/howToUpload";
import About from "../pages/about";
import Home from "../pages/home";
import Tab from "../tabs/tab";
import TabEdge from "../tabs/tabEdge";
import TabFirefox from "../tabs/tabFireFox";
import TabChrome from "@/tabs/tabChrome";
import Preview from "@/pages/preview";
import Feedback from "@/pages/feedback";

// ...existing code
// Add/import the page components you use below (create them if missing)


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/themes",
		element: <Themes />,
	},
	{
		path: "/build-new-tab",
		element: <BuildNewTab />,
	},
	{
		path: "/how-to-build",
		element: <HowToBuild />,
	},
	{
		path: "/how-to-upload",
		element: <HowToUpload />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/tab",
		element: <Tab />,
	},
	{
		path: "/tab-edge",
		element: <TabEdge />,
	},
	{
		path: "/tab-firefox",
		element: <TabFirefox />,
	},
	{
		path: "/tab-chrome",
		element: <TabChrome />,
	},
	{
		path: "/preview",
		element: <Preview />,
	},
	{
		path: "/feedback",
		element: <Feedback/>,
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);