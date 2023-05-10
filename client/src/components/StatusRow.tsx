import { Flex, StatusDate } from './styledComponents/common';
import { formatAsRelativeDateForXUnits } from '../utils';
import StatusBadge from './common/StatusBadge';

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