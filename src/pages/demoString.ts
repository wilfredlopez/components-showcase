export const demoString = `\`\`\`typescript
import React from "react"
import { WlButton, WlGrid, WlRow, WlCol } from "@wilfredlopez/react"

interface Props {
  variant?: "outline" | "solid" | "clear" | "full" | "block"
}

const ButtonsShowCase = ({ variant = "block" }: Props) => {
  return (
    <WlGrid>
      <WlRow>
        <WlCol
          size="12"
          sizeSm="6"
          offsetSm="3"
          className="wl-justify-content-between d-flex"
        >
          <WlCol>
            <WlButton variant={variant} color="primary">
              Primary
            </WlButton>
          </WlCol>
          <WlCol>
            <WlButton variant={variant} color="secondary">
              Secondary
            </WlButton>
          </WlCol>
          <WlCol>
            <WlButton variant={variant} color="tertiary">
              Tertiary
            </WlButton>
          </WlCol>
        </WlCol>
        <WlCol
          className="wl-justify-content-between d-flex"
          size="12"
          sizeSm="6"
          offsetSm="3"
        >
          <WlCol>
            <WlButton variant={variant} color="danger">
              Danger
            </WlButton>
          </WlCol>
          <WlCol>
            <WlButton variant={variant} color="success">
              Success
            </WlButton>
          </WlCol>
          <WlCol>
            <WlButton variant={variant} color="warning">
              Warning
            </WlButton>
          </WlCol>
        </WlCol>
        <WlCol
          className="wl-justify-content-between d-flex"
          size="12"
          sizeSm="6"
          offsetSm="3"
        >
          <WlCol>
            <WlButton variant={variant} color="dark">
              Dark
            </WlButton>
          </WlCol>
          <WlCol>
            <WlButton variant={variant} color="light">
              Light
            </WlButton>
          </WlCol>
          <WlCol>
            <WlButton variant={variant} color="medium">
              Medium
            </WlButton>
          </WlCol>
        </WlCol>
      </WlRow>
    </WlGrid>
  )
}

export default ButtonsShowCase
\`\`\`
`
