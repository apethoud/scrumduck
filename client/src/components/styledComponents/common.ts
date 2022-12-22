import styled from 'styled-components';
import colors from '../../styling/colors';

export const AppBackground = styled.div`
  background: ${colors.gray3};
`

export const SiteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 4px solid ${colors.brandPurple};
  background: ${colors.white};
`