/**
 * @testEnvironment node
 */
import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Router from "next/router";
import { MockedProvider } from "@apollo/client/testing";

import CardInfo from "./CardInfo";
import { mockJob } from "../../../mocks/jobs";

jest.mock("next/router", () => ({
  push: jest.fn(),
}));

describe("CardInfo", () => {
  afterEach(() => {
    cleanup;
  });

  it("handles click on update button", async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CardInfo job={mockJob} />
      </MockedProvider>
    );

    fireEvent.click(getByTestId("btn-edit"));

    expect(Router.push).toHaveBeenCalledWith("/vagas/editar/1");
  });

  it("handles click on card to detail job", async () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CardInfo job={mockJob} />
      </MockedProvider>
    );

    fireEvent.click(getByTestId("card-job"));

    expect(Router.push).toHaveBeenCalledWith("/vagas/detalhar/1");
  });
});
