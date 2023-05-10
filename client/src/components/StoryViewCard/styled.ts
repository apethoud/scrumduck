import styled from 'styled-components';

export const StatusColorRow = styled.div`
  margin-bottom: 6px;
  background: ${({ color }) => color ? color : "#fff"};
`

export const Section = styled.div`
  margin-left: 8px;
  padding: 12px;
`

export const BasicSection = styled(Section)`
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
`

export const DetailSection = styled(Section)`
  background: rgba(255, 255, 255, 0.9);
`

export const ActionSection = styled(Section)`
  background: rgba(255, 255, 255, 0.95);
`

export const StatusDate = styled.div`
  padding: 3px 8px 5px;
`