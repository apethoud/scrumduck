import styled from 'styled-components';

export const DayBox = styled.div`
  display: flex;
  margin-right: 4px;
  height: 24px;
  width: 24px;
`;

export const StatusSegment = styled.div`
  height: 100%;
  ${({ percentage, color }) => (percentage && color) ? `
    width: ${percentage}%;
    background-color: ${color};
    ` : null
  };
`

export const StartDate = styled.div`
  padding-top: 8px;
  padding-left: 2px;
  border-left: 1px solid black;
`

export const EndDate = styled.div`
  padding-top: 8px;
  padding-right: 2px;
  border-right: 1px solid black;
`

export const Month = styled.div`
  font-size: 12px;
  text-transform: uppercase;
`

export const Day = styled.div`
  font-size: 20px;
  ${({ textAlign }) => textAlign ? `
    text-align: ${textAlign};
  ` : null}
`