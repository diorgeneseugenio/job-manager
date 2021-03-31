/**
 * @testEnvironment node
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import FilterCompanies from "./FilterCompanies";
import { mockCompanies } from "../../../mocks/companies";

describe("FilterCompanies", () => {
  it("handles company filter", async () => {
    const setCompanyIdSelected = jest.fn();

    const { getByTestId, getByRole } = render(
      <FilterCompanies
        companies={mockCompanies}
        companyIdSelected={0}
        setCompanyIdSelected={setCompanyIdSelected}
      />
    );

    fireEvent.mouseDown(getByTestId("filter-by-company"));
    fireEvent.click(getByRole("option", { name: /fluid api/i }));

    expect(setCompanyIdSelected).toHaveBeenCalledWith(2);
  });
});
