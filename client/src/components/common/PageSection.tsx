import { SectionTitle } from "../styledComponents/common";

export default function PageSection(props) {
  return (
    <div style={{ marginBottom: 48 }}>
      <SectionTitle>{props.title}</SectionTitle>
      <div style={{ paddingTop: 12 }}>
        {props.children}
      </div>
    </div>
  )
}