import { BoldText, Flex, SubText, Text } from "./styledComponents/common"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { 
  ArrowRightCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon, 
  CheckCircleIcon, 
  RocketLaunchIcon, 
  SunIcon, 
  XCircleIcon 
} from "@heroicons/react/24/outline";
import colors from "../styling/colors";

dayjs.extend(utc)
dayjs.extend(timezone)

function TimelineIconWrapper({ children, iconWidth }) {
  return (
    <div style={{ width: iconWidth || 24, marginRight: 8, color: colors.brandPurple }}>
      {children}
    </div>
  )
}

function Comment({ data }) {
  return (
    <Flex>
      <TimelineIconWrapper iconWidth={36}>
        <ChatBubbleOvalLeftEllipsisIcon />
      </TimelineIconWrapper>
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function BlockingComment({ data }) {
  return (
    <Flex>
      <TimelineIconWrapper>
        <XCircleIcon />
      </TimelineIconWrapper>
      <BoldText>Blocked:&nbsp;</BoldText>
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function UnblockingComment({ data }) {
  return (
    <Flex>
      <TimelineIconWrapper>
        <CheckCircleIcon />
      </TimelineIconWrapper>
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
          {data.new_status === "Done" ? (
            <TimelineIconWrapper>
              <RocketLaunchIcon />
            </TimelineIconWrapper>
          ) : (
            <TimelineIconWrapper>
              <ArrowRightCircleIcon />
            </TimelineIconWrapper>
          )}
          <BoldText>{data.old_status}</BoldText>
          <Text>&nbsp;to&nbsp;</Text>
          <BoldText>{data.new_status}</BoldText>
        </Flex>
      ) : (
        <Flex>
          <TimelineIconWrapper>
            <SunIcon />
          </TimelineIconWrapper>
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
          style={{ marginBottom: 4 }}
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