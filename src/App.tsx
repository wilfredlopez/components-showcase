import React from "react"
import Router from "./Router"
import { WlAppbar, WlText } from "@wilfredlopez/react"

function App() {
  return (
    <div className="App">
      <Router />
      <WlAppbar color="medium">
        <footer>
          <WlText color="dark" className="wl-padding-start">@wilfredlopez/react</WlText>
        </footer>
      </WlAppbar>
    </div>
  )
}

export default App
