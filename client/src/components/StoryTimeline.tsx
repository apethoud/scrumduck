import { Flex } from "./styledComponents/common"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc)
dayjs.extend(timezone)

export default function StoryTimeline({ story }) {
  return (
    <div>
      {story.timeline.map(event => (
        <Flex key={event.id}>
          <div>{dayjs.tz(event.date, dayjs.tz.guess()).format("MMM DD")}</div>
        </Flex>
      ))}
    </div>
  )
}