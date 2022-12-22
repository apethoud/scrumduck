import { 
  AppBackground,
  SiteHeader as StyledSiteHeader
} from "./styledComponents/common";
import { Outlet } from "react-router";

export default function SiteHeader() {
  return (
    <AppBackground>
      <StyledSiteHeader>
        <div>Scrumduck</div>
        <div>Login</div>
      </StyledSiteHeader>
      <Outlet />
    </AppBackground>
  )
}