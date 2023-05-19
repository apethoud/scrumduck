import { Outlet } from "react-router-dom";
import { AppBackground } from "../components/styledComponents/common";

export default function AppContainer() {
  return (
    <AppBackground>
      <Outlet />
    </AppBackground>
  )
}