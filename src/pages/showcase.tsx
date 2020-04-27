import { WlContainer } from "@wilfredlopez/react"
import React from "react"
import ButtonsCard from "../components/buttons/ButtonsCard"
import AppHeader from "../components/Heather"

interface Props {}

const Showcase = (props: Props) => {
  return (
    <React.Fragment>
      <AppHeader title="Showcase"></AppHeader>
      <WlContainer size="sm">
        <div className="wl-margin-top">
          <ButtonsCard />
        </div>
        <br />
      </WlContainer>
    </React.Fragment>
  )
}

export default Showcase
