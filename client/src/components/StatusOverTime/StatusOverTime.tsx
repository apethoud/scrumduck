import { Flex } from '../styledComponents/common';
import first from 'lodash/first';
import last from 'lodash/last';
import { formatAsDateByTokenString } from '../../utils';
import {
  Day,
  DayBox,
  EndDate,
  Month,
  StartDate,
  StatusSegment
} from './styled';

export default function StatusOverTime({ days }) {

  console.log("days is: ", days);

  return (
    <div>
      <Flex>
        {days.map(day => (
          <DayBox key={day.id}>
            {day.statuses.map(increment => (
              <StatusSegment 
                percentage={increment.percentage}
                color={increment.status ? increment.status.color : "#ebebeb"}
                key={increment.id}
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