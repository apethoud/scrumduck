import { PatternBackground } from "../components/styledComponents/common";
import { PrimaryHeader, TextBox } from "../components/styledComponents/marketingPage";

export default function MarketingPage() {
  return (
    <PatternBackground>
      <div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "space-around", background: "transparent" }}>
        <TextBox>
          <PrimaryHeader>Track the progress of user stories over time with powerfully simple, easy-to-read status updates.</PrimaryHeader>
        </TextBox>
      </div>
    </PatternBackground>
  )
}