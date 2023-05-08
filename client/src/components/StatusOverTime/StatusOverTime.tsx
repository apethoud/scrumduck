import styled from 'styled-components';
import { Flex } from '../styledComponents/common';
import first from 'lodash/first';
import last from 'lodash/last';
import { formatAsDateByTokenString } from '../../utils';

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
    padding-top: 8px;
    padding-left: 2px;
    border-left: 1px solid black;
  `

  const EndDate = styled.div`
    padding-top: 8px;
    padding-right: 2px;
    border-right: 1px solid black;
  `

  const Month = styled.div`
    font-size: 12px;
    text-transform: uppercase;
  `

  const Day = styled.div`
    font-size: 20px;
    ${({ textAlign }) => textAlign ? `
      text-align: ${textAlign};
    ` : null}
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
        <StartDate>
          <Month>{formatAsDateByTokenString(first(days).date, "MMM")}</Month>
          <Day textAlign={"left"}>{formatAsDateByTokenString(first(days).date, "DD")}</Day>
        </StartDate>
        <EndDate>
          <Month>{formatAsDateByTokenString(last(days).date, "MMM")}</Month>
          <Day textAlign={"right"}>{formatAsDateByTokenString(last(days).date, "DD")}</Day>
        </EndDate>
      </Flex>
    </div>
  )
}