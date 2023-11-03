import { render } from "@testing-library/react";
import Provider from "../../app/context/Provider";

export function renderWithContext(component) {
  return(
    render(
      <Provider>
        {component}
      </Provider>
    )
  )
}