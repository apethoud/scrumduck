import { Flex, StatusBadge, StatusDate } from './styledComponents/common';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function StatusRow({ status, statusDate }) {
  return (
    <Flex>
      <StatusBadge>{status}</StatusBadge>
      <StatusDate>for {dayjs(statusDate).fromNow(true)}</StatusDate>
    </Flex>
  )
}