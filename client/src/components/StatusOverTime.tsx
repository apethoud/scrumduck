import styled from 'styled-components';
import { Flex } from './styledComponents/common';

export default function StatusOverTime({ days }) {
  const DayBox = styled.div`
    display: flex;
    margin-right: 4px;
    height: 24px;
    width: 24px;
  `;

  const StatusSegment = styled.div`
    height: 100%;
    ${({ percentage, color }) => (percentage && color) ? `
      width: ${percentage}%;
      background-color: ${color};
      ` : null
    };
  `

  console.log("days is: ", days);

  return (
    <Flex>
      {days.map(day => (
        <DayBox>
          {day.statuses.map(increment => (
            <StatusSegment 
              percentage={increment.percentage}
              color={increment.status ? increment.status.color : "#ebebeb"}
            />
          ))}
        </DayBox>
      ))}
    </Flex>
  )
}