import React from "react"
import { WlCard, WlGrid, WlRow, WlCol } from "@wilfredlopez/react"
import ButtonsShowCase from "./ButtonsShowCase"

interface Props {}

const ButtonsCard = (props: Props) => {
  return (
    <WlCard>
      <h1 className="wl-text-center">Buttons</h1>
      <WlGrid>
        <WlRow>
          <WlCol>
            <div>
              <h4 className="wl-no-margin">Props</h4>
              <p>
                <b>variant:</b> "outline" | "solid" | "clear" | "full" | "block"{" "}
              </p>
              <p>
                <b>circular:</b> true | false
              </p>
              <p>
                <b>size:</b> "sm" | "lg" | "xl"
              </p>
              <p>
                <b>Href:</b> string
              </p>
            </div>
          </WlCol>
        </WlRow>
      </WlGrid>
      <ButtonsShowCase />
      <ButtonsShowCase variant="outline" />
      <ButtonsShowCase variant="clear" />
    </WlCard>
  )
}

export default ButtonsCard
