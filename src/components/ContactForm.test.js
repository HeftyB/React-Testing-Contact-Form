import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";


test("renders correctly", () => {
    render(<ContactForm/>);
  })

test("is able to fill out form and submit", () => {
  render(<ContactForm/>);
  const fNameInput = screen.getByTestId(/fName/);
  const lNameInput = screen.getByTestId(/lName/);
  const emailInput = screen.getByTestId(/email/);
  const messageInput = screen.getByTestId(/message/);
  const submitBtn = screen.getByTestId(/message/);
  fireEvent.change(fNameInput, {
      target: {name: "firstName", value: "fnametest"}
    });
    fireEvent.change(lNameInput, {
        target: {name: "lastName", value: "lnametest"}
      });
    fireEvent.change(emailInput, {
        target: {name: "email", value: "email@email.com"}
      });
    fireEvent.change(messageInput, {
        target: {name: "message", value: "testing123 .... testing 1 2 3"}
    });
    fireEvent.click(submitBtn);
    screen.findAllByText(/fnametest/i);
    screen.findAllByText(/lnametest/i);
    screen.findAllByText(/email/i);
    screen.findAllByText(/testing123 .... testing 1 2 3/i);
})