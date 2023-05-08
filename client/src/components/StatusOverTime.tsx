import styled from 'styled-components';
import { Flex } from './styledComponents/common';
import first from 'lodash/first';
import last from 'lodash/last';

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

  const StartDate = styled.div`
    border-left: 1px solid black;
  `

  const EndDate = styled.div`
    border-right: 1px solid black;
  `

  console.log("days is: ", days);

  return (
    <div>
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
      <Flex style={{ justifyContent: "space-between", marginTop: 8 }}>
        <StartDate>{first(days).date}</StartDate>
        <EndDate>{last(days).date}</EndDate>
      </Flex>
    </div>
  )
}