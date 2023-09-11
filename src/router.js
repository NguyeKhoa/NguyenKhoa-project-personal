import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/user/homepage";
import { ROUTER } from "./utils/router";
import Profilepage from "./pages/user/Profilepage";
import MasterLayout from "pages/user/theme/masterLayout";

const router = createBrowserRouter([
    {
        path: ROUTER.USER.HOME,
        element: <MasterLayout />
    },
    {
        path: ROUTER.USER.PROFILE,
        element: <Profilepage />
    },
])

export default router