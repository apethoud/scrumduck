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

function Comment({ data }) {
  return (
    <Flex>
      <div style={{ width: 36, marginRight: 8, color: colors.brandPurple }}>
        <ChatBubbleOvalLeftEllipsisIcon />
      </div>
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function BlockingComment({ data }) {
  return (
    <Flex>
      <div style={{ width: 24, marginRight: 8, color: colors.brandPurple }}>
        <XCircleIcon />
      </div>
      <BoldText>Blocked:&nbsp;</BoldText>
      <Text>"{data.comment}"</Text>
    </Flex>
  )
}

function UnblockingComment({ data }) {
  return (
    <Flex>
      <div style={{ width: 24, marginRight: 8, color: colors.brandPurple }}>
        <CheckCircleIcon />
      </div>
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
            <div style={{ width: 24, marginRight: 8, color: colors.brandPurple }}>
              <RocketLaunchIcon />
            </div>
          ) : (
            <div style={{ width: 24, marginRight: 8, color: colors.brandPurple }}>
              <ArrowRightCircleIcon />
            </div>
          )}
          <BoldText>{data.old_status}</BoldText>
          <Text>&nbsp;to&nbsp;</Text>
          <BoldText>{data.new_status}</BoldText>
        </Flex>
      ) : (
        <Flex>
          <div style={{ width: 24, marginRight: 8, color: colors.brandPurple }}>
            <SunIcon />
          </div>
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