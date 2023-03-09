import { BoldText, Flex, SubText, Text } from "./styledComponents/common"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleArrowRight, 
  faCircleCheck, 
  faCircleXmark, 
  faCommentDots, 
  faRocket, 
  faSkull, 
  faSun, 
} from '@fortawesome/free-solid-svg-icons'

dayjs.extend(utc)
dayjs.extend(timezone)

function TimelineIcon({ icon }) {
  return (
    <div style={{ marginRight: 8 }}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
  )
}

function Comment({ data }) {
  return (
    <Flex>
      <TimelineIcon icon={faCommentDots} />
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function BlockingComment({ data }) {
  return (
    <Flex>
      <TimelineIcon icon={faCircleXmark} />
      <BoldText>Blocked:&nbsp;</BoldText>
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function UnblockingComment({ data }) {
  return (
    <Flex>
      <TimelineIcon icon={faCircleCheck} />
      <BoldText>Resolved:&nbsp;</BoldText>
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function StatusChange({ data }) {
  return (
    <>
      {data.old_status !== null ? (
        <Flex>
          <TimelineIcon icon={data.new_status === "Done" ? faRocket : faCircleArrowRight} />
          <BoldText>{data.old_status}</BoldText>
          <Text>&nbsp;to&nbsp;</Text>
          <BoldText>{data.new_status}</BoldText>
        </Flex>
      ) : (
        <Flex>
          <TimelineIcon icon={faSun} />
          <BoldText>Added</BoldText>
          <Text>&nbsp;to sprint as&nbsp;</Text>
          <BoldText>{data.new_status}</BoldText>
        </Flex>
      )}
    </>
  )
}

export default function StoryTimeline({ story }) {
  return (
    <div>
      {story.timeline.map(event => (
        <Flex 
          key={event.id}
          style={{ marginBottom: 12 }}
        >
          <SubText style={{ marginRight: 12, flexShrink: 0 }}>{dayjs.tz(event.date, dayjs.tz.guess()).format("MMM DD")}</SubText>
          {event.event.type === "status_change" && (
            <StatusChange data={event.event.data} />
          )}
          {event.event.type === "comment" && (
            <Comment data={event.event.data} />
          )}
          {event.event.type === "blocking_comment" && (
            <BlockingComment data={event.event.data} />
          )}
          {event.event.type === "unblocking_comment" && (
            <UnblockingComment data={event.event.data} />
          )}
        </Flex>
      ))}
    </div>
  )
}