/**
 * @testEnvironment node
 */
import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import JobList from "./";
import { mockFetchJobs, mockFetchJobsWithError } from "../../../mocks/jobs";
import { mockFetchCompanies } from "../../../mocks/companies";

describe("JobList", () => {
  it("renders correctly", async () => {
    const { container, getByRole } = render(
      <MockedProvider
        mocks={[mockFetchJobs, mockFetchCompanies]}
        addTypename={false}
      >
        <JobList />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(getByRole("heading", { name: /Dev/i })).toBeDefined()
    );

    expect(container).toMatchSnapshot();
  });

  it("handles problem to load", async () => {
    const { container, getByText } = render(
      <MockedProvider mocks={[mockFetchJobsWithError]} addTypename={false}>
        <JobList />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(getByText("Não foi possível carregar as vagas")).toBeDefined()
    );

    expect(container).toMatchSnapshot();
  });
});
