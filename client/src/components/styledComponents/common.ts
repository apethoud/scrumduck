import styled from 'styled-components';
import colors from '../../styling/colors';
import { Link as BasicLink, NavLink } from 'react-router-dom';

// Utilities

export const Flex = styled.div`
display: flex;
`

// Backgrounds

export const AppBackground = styled.div`
  background: ${colors.white};
`

export const PatternBackground = styled.div`
  height: 100vh;
  background-color: #f8f2ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='24' viewBox='0 0 88 24'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='autumn' fill='%23bca6d3' fill-opacity='0.4'%3E%3Cpath d='M10 0l30 15 2 1V2.18A10 10 0 0 0 41.76 0H39.7a8 8 0 0 1 .3 2.18v10.58L14.47 0H10zm31.76 24a10 10 0 0 0-5.29-6.76L4 1 2 0v13.82a10 10 0 0 0 5.53 8.94L10 24h4.47l-6.05-3.02A8 8 0 0 1 4 13.82V3.24l31.58 15.78A8 8 0 0 1 39.7 24h2.06zM78 24l2.47-1.24A10 10 0 0 0 86 13.82V0l-2 1-32.47 16.24A10 10 0 0 0 46.24 24h2.06a8 8 0 0 1 4.12-4.98L84 3.24v10.58a8 8 0 0 1-4.42 7.16L73.53 24H78zm0-24L48 15l-2 1V2.18A10 10 0 0 1 46.24 0h2.06a8 8 0 0 0-.3 2.18v10.58L73.53 0H78z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`

// Site Header

export const SiteHeader = styled.div`
  display: flex;
  flex: 0 0 content;
  justify-content: space-between;
  border-top: 4px solid ${colors.brandPurple};
  background: ${colors.white};
  border-bottom: 1px solid ${colors.gray10};
`

export const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-decoration: none;
`

export const SiteLogo = styled.div`
  font-family: "Calistoga", serif;
  color: ${colors.brandPurple};
`

// Boxes

export const Box = styled.div`
  margin: 24px;
  padding: 24px;
  border-radius: 12px;
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const PrimaryBox = styled(Box)`
  border: 1px solid ${colors.brandPurple};
`

// Text

export const Text = styled.div`
  ${({ inline }) => inline ? `display: inline` : ``}
  font-size: 16px;
  color: ${colors.gray90};
`

export const BoldText = styled(Text)`
  font-weight: 700;
  ${({ inline }) => inline && "display: inline;"}
`

export const SubText = styled(Text)`
  color: ${colors.gray70};
`

export const PrimaryHeader = styled(Text)`
  font-size: 28px;
`

export const SecondaryHeader = styled(BoldText)`
  font-size: 20px;
`

export const SectionTitle = styled.div`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.brandPurple};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Link = styled(BasicLink)`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.brandPurple};
  text-decoration: none;
`

export const BackLink = styled(Link)`
  font-size: 14px;
  font-weight: inherit;
`

// Form Elements

export const Label = styled.label`
  margin: 16px 0 8px 8px;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${colors.purple50};
  border-radius: 8px;
  font-size: 16px;
  font-family: "Assistant", sans-serif;
`

export const Button = styled.button`
  border-radius: 8px;
  padding: 7px 12px 9px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Assistant", sans-serif;
  ${({ primary }) => primary 
    ? `
      background: ${colors.brandPurple};
      color: ${colors.white};
      border: 1px solid ${colors.brandPurple};
      ` 
    : `
      background: ${colors.white};
      color: ${colors.brandPurple};
      border: 1px solid ${colors.brandPurple};
      `
  };
  ${({ series }) => series 
    && `
      margin: 6px 12px 6px 0px;
      `
  };
`

// Unique Elements

export const StatusDate = styled(SubText)`
  padding: 6px 10px 8px 10px;
`

