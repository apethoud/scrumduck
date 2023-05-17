import { 
  SiteHeader as StyledSiteHeader,
  SiteLogo,
  NavItem,
  Text
} from "./styledComponents/common";
import { Outlet } from "react-router-dom";
import styled from 'styled-components';

const OutletContainer = styled.div`
  flex: 1 1 auto;
`

export default function SiteHeader() {
  return (
    <div>
      <StyledSiteHeader>
        <NavItem to="/">
          <SiteLogo>Scrumduck</SiteLogo>
        </NavItem>
        <NavItem to="login">
          <Text>Login</Text>
        </NavItem>
      </StyledSiteHeader>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </div>
  )
}