import { 
  AppBackground,
  SiteHeader as StyledSiteHeader,
  SiteLogo,
  NavItem
} from "./styledComponents/common";
import { Outlet } from "react-router";

export default function SiteHeader() {
  return (
    <AppBackground>
      <StyledSiteHeader>
        <NavItem>
          <SiteLogo>Scrumduck</SiteLogo>
        </NavItem>
        <NavItem>
          <div>Login</div>
        </NavItem>
      </StyledSiteHeader>
      <Outlet />
    </AppBackground>
  )
}