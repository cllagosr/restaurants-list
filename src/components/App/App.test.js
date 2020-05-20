/* eslint-disable camelcase */
import mockAxios from "axios";
import React from "react";
import App from "../../containers/App";
import { fireEvent, screen, render } from "../../test-utils"; // eslint-disable-line no-shadow

const items = [
  {
    id: 1,
    name: "name 1",
    image_url: "url 1",
    location: { address1: "address 1", zip_code: 11111 },
  },
  {
    id: 2,
    name: "name 2",
    image_url: "url 2",
    location: { address1: "address 2", zip_code: 22222 },
  },
];

const burgerItem = [
  {
    id: 3,
    name: "name 3",
    image_url: "url 3",
    location: { address1: "address 3", zip_code: 33333 },
  },
];

const data = {
  businesses: items,
};

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

test("renders a list of restaurants", async () => {
  mockAxios.get.mockResolvedValueOnce({ data });
  const loadingText = "Loading...";

  const { getByText } = render(<App />);
  expect(getByText(loadingText)).toBeVisible();

  const cards = await screen.findAllByTestId("card");

  expect(screen.queryByText(loadingText)).toBe(null);

  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(cards[0]).toHaveTextContent(items[0].name);
  expect(cards[1]).toHaveTextContent(items[1].name);
  expect(cards.length).toBe(2);
});

test("renders a list of restaurants based on selected type", async () => {
  mockAxios.get.mockResolvedValueOnce({ data });
  const loadingText = "Loading...";

  const { getByText, getByTestId } = render(<App />);
  await screen.findAllByTestId("card");

  mockAxios.get.mockResolvedValueOnce({
    data: {
      businesses: burgerItem,
    },
  });

  fireEvent.change(getByTestId("select"), { target: { value: "burgers" } });
  expect(getByText(loadingText)).toBeVisible();

  const cards = await screen.findAllByTestId("card");

  expect(mockAxios.get).toHaveBeenCalledTimes(2);
  expect(cards[0]).toHaveTextContent(burgerItem[0].name);
  expect(cards[0]).toHaveTextContent(burgerItem[0].location.address1);
  expect(cards[0]).toHaveTextContent(burgerItem[0].location.zip_code);
  expect(cards.length).toBe(1);
});

test("calls the api only the first time user selects the same filter", async () => {
  mockAxios.get.mockResolvedValueOnce({ data });

  const { getByTestId } = render(<App />);
  await screen.findAllByTestId("card");

  mockAxios.get.mockResolvedValueOnce({
    data: {
      businesses: burgerItem,
    },
  });

  fireEvent.change(getByTestId("select"), { target: { value: "burgers" } });
  await screen.findAllByTestId("card");

  fireEvent.change(getByTestId("select"), { target: { value: "restaurants" } });
  const cards = await screen.findAllByTestId("card");

  expect(mockAxios.get).toHaveBeenCalledTimes(2);
  expect(cards[0]).toHaveTextContent(items[0].name);
});

test("shows error message if request went wrong", async () => {
  mockAxios.get.mockRejectedValueOnce({ error: 'error' });
  const loadingText = "Loading...";

  const { getByText } = render(<App />);
  expect(getByText(loadingText)).toBeVisible();

  const errorMessage = await screen.findByText("Oops! something went wrong");

  expect(errorMessage).toBeVisible();
  expect(screen.queryByText(loadingText)).toBe(null);
});