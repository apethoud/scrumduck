import { Outlet } from "react-router-dom";
import { AppBackground } from "../components/styledComponents/common";

export default function AppContainer() {
  return (
    <AppBackground>
      <div style={{ paddingTop: 24, paddingBottom: 48 }}>
        <Outlet />
      </div>
    </AppBackground>
  )
}