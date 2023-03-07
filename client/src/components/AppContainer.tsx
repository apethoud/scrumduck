import { Outlet } from "react-router-dom";
import { AppBackground } from "./styledComponents/common";

export default function AppContainer() {
  return (
    <AppBackground>
      <Outlet />
    </AppBackground>
  )
}