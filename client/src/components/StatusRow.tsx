import { Flex, StatusDate } from './styledComponents/common';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { formatAsRelativeDateForXUnits } from '../utils';
import StatusBadge from './common/StatusBadge';

dayjs.extend(relativeTime);

export default function StatusRow({ status }) {
  return (
    <Flex>
      <StatusBadge
        status={status}
      />
      <StatusDate>{formatAsRelativeDateForXUnits(status.lastUpdated)}</StatusDate>
    </Flex>
  )
}