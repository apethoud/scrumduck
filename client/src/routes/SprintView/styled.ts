import styled from 'styled-components';
import colors from '../../styling/colors';

export const MainPane = styled.div`
  flex: 1;
  overflow: auto;
  padding: 32px;
`

export const SidePane = styled.div`
  flex: 0 0 25%;
  background: ${colors.gray05};
  border-left: 1px solid ${colors.gray10};
  padding: 32px;
`