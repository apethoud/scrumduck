import { 
  SiteHeader as StyledSiteHeader,
  SiteLogo,
  NavItem,
  Text
} from "./styledComponents/common";
import { Outlet } from "react-router-dom";

export default function SiteHeader() {
  return (
    <>
      <StyledSiteHeader>
        <NavItem to="/">
          <SiteLogo>Scrumduck</SiteLogo>
        </NavItem>
        <NavItem to="login">
          <Text>Login</Text>
        </NavItem>
      </StyledSiteHeader>
      <Outlet />
    </>
  )
}