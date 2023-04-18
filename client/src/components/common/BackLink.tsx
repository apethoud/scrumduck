import { BackLink as StyledBackLink } from "../styledComponents/common";

export default function BackLink({ to }) {

  return (
    <div style={{ marginBottom: 24 }}>
      <StyledBackLink to={to}>&lt; Back</StyledBackLink>
    </div>
  )
}