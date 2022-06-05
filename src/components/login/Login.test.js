import {render, screen} from "@testing-library/react";
import {Login} from "./Login";
import userEvent from "@testing-library/user-event";
import {ON_LOGIN, ON_PASSWORD, ON_USERNAME} from "../../modules/events";

test('should show a input with a placeholder "username" and type ' +
    'text that dispatches a ON_USERNAME on change with the correct value', () => {
    const dispatch = jest.fn()
    render(<Login _useDispatch ={() => dispatch} _useSelector = {() => {}}/>)
    const input = screen.getByPlaceholderText('username')
    expect(input).toHaveAttribute('type', 'text')
    userEvent.type(input, 'admin')
    expect(dispatch).toHaveBeenLastCalledWith({
        type: ON_USERNAME,
        value: 'admin'
    })
})

test('should show a input with a placeholder "password" and type ' +
    'text that dispatches a ON_PASSWORD on change with the correct value', () => {
    const dispatch = jest.fn()
    render(<Login _useDispatch ={() => dispatch} _useSelector = {() => {}}/>)
    const input = screen.getByPlaceholderText('password')
    expect(input).toHaveAttribute('type', 'password')
    userEvent.type(input, 'pass')
    expect(dispatch).toHaveBeenLastCalledWith({
        type: ON_PASSWORD,
        value: 'pass'
    })
})

test('should show a "Login" button that dispatches an ON_LOGIN event when clicked', () =>{
    const dispatch = jest.fn()
    render(<Login _useDispatch={() => dispatch} _useSelector={() => {}}/>)
    const button = screen.getByText("Login")
    expect(button.tagName).toBe("BUTTON")
    userEvent.click(button)
    expect(dispatch).toHaveBeenCalledWith({type: ON_LOGIN})
})


