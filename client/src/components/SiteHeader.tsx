import { 
  AppBackground,
  SiteHeader as StyledSiteHeader,
  SiteLogo,
  NavItem,
  Text
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
          <Text>Login</Text>
        </NavItem>
      </StyledSiteHeader>
      <Outlet />
    </AppBackground>
  )
}