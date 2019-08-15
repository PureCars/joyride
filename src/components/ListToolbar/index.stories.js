import React from "react"
import { storiesOf } from "@storybook/react"
import { ListToolbar } from "./index"

storiesOf("Components|ListToolbar", module)
  .add("default", () => (
    <ListToolbar
      itemCount={42}
      chips={["It's a chip"]}
      onResetFilters={() => console.log("reset filters")}
      onDeleteChip={chipName => console.log(`deleted ${chipName}`)}
      onChangeSort={() => console.log("sort changed")}
    />
  ))
  .add("no chips", () => (
    <ListToolbar
      itemCount={42}
      chips={[]}
      onResetFilters={() => console.log("reset filters")}
      onDeleteChip={chipName => console.log(`deleted ${chipName}`)}
      onChangeSort={() => console.log("sort changed")}
    />
  ))
