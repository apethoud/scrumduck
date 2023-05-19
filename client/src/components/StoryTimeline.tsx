import { BoldText, Flex, SubText, Text } from "./styledComponents/common"
import { 
  ArrowRightCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon, 
  CheckCircleIcon, 
  RocketLaunchIcon, 
  SunIcon, 
  XCircleIcon 
} from "@heroicons/react/24/outline";
import colors from "../styling/colors";
import { formatAsMonthDayDate } from "../utils";
import exampleStatusRoster from "../api/exampleStatusRoster";
import { find } from 'lodash'
import StatusBadge from './common/StatusBadge';

function getStatusObjectByName(name) {
  return find(exampleStatusRoster, { name });
}

function TimelineIconWrapper({ children }) {
  return (
    <div style={{ width: 24, marginRight: 8, color: colors.brandPurple, flexShrink: 0 }}>
      {children}
    </div>
  )
}

function Comment({ data }) {
  return (
    <Flex>
      <TimelineIconWrapper>
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
      <Text>
        <StatusBadge 
          status={getStatusObjectByName("Blocked")}
          inline
        />
        <BoldText inline>: </BoldText>
        "{data.comment}"
      </Text>
    </Flex>
  )
}

function UnblockingComment({ data }) {
  return (
    <Flex>
      <TimelineIconWrapper>
        <CheckCircleIcon />
      </TimelineIconWrapper>
      <Text>
        <BoldText inline>Resolved:&nbsp;</BoldText>
        "{data.comment}"
      </Text>
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
          <Text>
          <StatusBadge 
            status={getStatusObjectByName(data.old_status)}
            inline
          />
            &nbsp;to&nbsp;
            <StatusBadge 
              status={getStatusObjectByName(data.new_status)}
              inline
            />
          </Text>
        </Flex>
      ) : (
        <Flex>
          <TimelineIconWrapper>
            <SunIcon />
          </TimelineIconWrapper>
          <Text>
            <BoldText inline>Added</BoldText>
            &nbsp;to sprint as&nbsp;
            <BoldText inline>{data.new_status}</BoldText>
          </Text>
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
          <SubText style={{ marginRight: 12, flexShrink: 0 }}>{formatAsMonthDayDate(event.date)}</SubText>
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