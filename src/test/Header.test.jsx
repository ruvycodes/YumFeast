import { describe, expect, it } from "vitest";
import Header from "../Components/Header";
import { fireEvent, render, screen } from "../utils/test-utils";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";

//add "test": "vitest --coverage" in package.json to enable table coverage

describe("Header", () => {
    it("Login should change to Logout on click", () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>)  // we have to wrap our component inside the provider and router since unit testing means testing in isolation so we have isolated this componenet , thats why we need to do this
        let login = screen.getByRole('button', { name: "Login" })
        fireEvent.click(login)
        let logout = screen.getByRole('button', { name: "Logout" })
        expect(logout).toBeInTheDocument()
    })

    it("Logo should render properly" , ()=> {
        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            </Provider>
            </BrowserRouter>)

            let logo = screen.getByAltText('logo')
            expect(logo).toBeInTheDocument
    })
})