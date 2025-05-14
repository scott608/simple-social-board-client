import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterComponent from './RegisterComponent';
import { describe, test, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

describe('RegisterComponent', () => {
  test('輸入註冊資訊並觸發 onSubmit', async () => {
    const user = userEvent.setup();

    const mockSubmit = vi.fn();

    render(
      <MemoryRouter>
        <RegisterComponent
          onSubmit={mockSubmit}
        />
      </MemoryRouter>
    );

    await user.type(screen.getByLabelText('姓名'), '小明');
    await user.type(screen.getByLabelText('信箱'), 'test@example.com');
    await user.click(screen.getByLabelText('女性'));
    await user.type(screen.getByLabelText('生日'), '1999-01-01');
    await user.type(screen.getByLabelText('帳號'), 'testuser');
    await user.type(screen.getByLabelText('密碼'), '123456');
    await user.click(screen.getByRole('button', { name: '點此註冊' }));


    expect(mockSubmit).toHaveBeenCalled();
  });
});
