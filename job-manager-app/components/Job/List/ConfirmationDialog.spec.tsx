/**
 * @testEnvironment node
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ConfirmationDialog from "./ConfirmationDialog";

describe("ConfirmationDialog", () => {
  it("handles deny dialog confirmation", async () => {
    const setOpen = jest.fn();

    const { getByRole } = render(
      <ConfirmationDialog
        open
        setOpen={setOpen}
        jobTitle="Desenvolvedor React"
        callbackAccept={jest.fn()}
      />
    );

    fireEvent.click(getByRole("button", { name: /não/i }));

    expect(setOpen).toHaveBeenCalledWith(false);
  });

  it("handles accept dialog confirmation", async () => {
    const setOpen = jest.fn();
    const callbackAccept = jest.fn();

    const { getByRole } = render(
      <ConfirmationDialog
        open
        setOpen={setOpen}
        jobTitle="Desenvolvedor React"
        callbackAccept={callbackAccept}
      />
    );

    fireEvent.click(getByRole("button", { name: /sim/i }));

    expect(callbackAccept).toHaveBeenCalledTimes(1);
  });
});
