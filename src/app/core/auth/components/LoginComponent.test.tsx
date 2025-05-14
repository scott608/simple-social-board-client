import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import userEvent from '@testing-library/user-event';

import LoginComponent from "./LoginComponent";
import { MemoryRouter } from "react-router-dom";

describe('LoginComponent', () => {
    test('輸入帳號與密碼，並觸發 onSubmit', async () => {
        const user = userEvent.setup();
        const mockSetAccount = vi.fn();
        const mockSetPassword = vi.fn();
        const mockSubmit = vi.fn();

        // MemoryRouter 是 React Router 的一個組件，用於在測試中模擬路由
        render(
            <MemoryRouter>
                <LoginComponent
                    account=""
                    password=""
                    setAccount={mockSetAccount}
                    setPassword={mockSetPassword}
                    onSubmit={mockSubmit}
                />
            </MemoryRouter>
        );

        //getByLabelText：找到 <input>，根據 aria-label="帳號"。
        //getByRole('button', { name: /登入/i })：找到文字是「登入」的 <button>。
        const accountInput = screen.getByLabelText('帳號');
        const passwordInput = screen.getByLabelText('密碼');
        const loginButton = screen.getByRole('button', { name: /登入/i });

        await user.type(accountInput, 'qazz6411');
        await user.type(passwordInput, 'qazz6411');
        await user.click(loginButton);

        expect(mockSetAccount).toHaveBeenCalled();
        expect(mockSetPassword).toHaveBeenCalled();
        expect(mockSubmit).toHaveBeenCalled();
    });
});
