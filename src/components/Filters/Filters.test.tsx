import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Filters from ".";

test("fires event when user enters text", () => {
  const changeHandler = vi.fn();

  render(<Filters onChange={changeHandler} />);

  fireEvent.change(screen.getByPlaceholderText("Filter by title"), {
    target: { value: "foo" },
  });

  expect(changeHandler).toHaveBeenCalledWith("foo");
});
