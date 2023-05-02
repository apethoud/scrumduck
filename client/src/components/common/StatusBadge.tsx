import styled from 'styled-components';
import { BoldText } from '../styledComponents/common';

const Background = styled.div`
  padding: 3px 8px 5px;
  background: ${({ color }) => color ? color : "#3562de"};
  border-radius: 4px;
`

export default function StatusBadge({ color, name }) {
  return (
    <Background color={color}>
      <BoldText>{name}</BoldText>
    </Background>
  )
}