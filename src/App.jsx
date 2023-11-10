import { Outlet, useNavigation } from "react-router-dom"
import BaseNavbar from "./pages/globalLayouts/BaseNavbar/BaseNavbar"
import BaseFooter from "./pages/globalLayouts/BaseFooter/BaseFooter"
import LoaderPage from "./pages/LoaderPage/LoaderPage";

function App() {
  const { state } = useNavigation();
  return (
    <>
      <BaseNavbar />
      {state === 'loading' ? <LoaderPage /> : <Outlet />}
      <BaseFooter />
    </>
  )
}

export default App
