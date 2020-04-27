import { WlCol, WlGrid, WlRow } from "@wilfredlopez/react"
import React from "react"
import ButtonsShowCase from "../components/buttons/ButtonsShowCase"
import AppHeader from "../components/Heather"
import MarkDown from "../components/MarkDown"
import { demoString } from "./demoString"
import { initCss } from "./initCssString"
const initInstall = `
   \`\`\`shell
    npm install @wilfredlopez/react
  \`\`\`
  #### or
  \`\`\`shell
  yarn add @wilfredlopez/react
\`\`\`
`
interface Props {}

const installation = (props: Props) => {
  return (
    <React.Fragment>
      <AppHeader title="Getting Started"></AppHeader>
      <WlGrid>
        <WlRow>
          <WlCol>
            <h1>Install</h1>
            <MarkDown markdownContent={initInstall} />
          </WlCol>
        </WlRow>
        <WlRow>
          <WlCol>
            <h2>Default CSS</h2>
            <MarkDown markdownContent={initCss} />
          </WlCol>
        </WlRow>
        <WlRow>
          <WlCol>
            <h2>Demo</h2>
            <MarkDown markdownContent={demoString} />
          </WlCol>
        </WlRow>
        <WlRow>
          <WlCol>
            <h3
              style={{
                color: "var(--wl-color-light)",
              }}
            >
              Demo Output
            </h3>
            <ButtonsShowCase />
          </WlCol>
        </WlRow>
      </WlGrid>
    </React.Fragment>
  )
}

export default installation
