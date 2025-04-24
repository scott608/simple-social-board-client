import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginComponent({
  account,
  password,
  setAccount,
  setPassword,
  onSubmit
}: {
  account: string;
  password: string;
  setAccount: (value: string) => void;
  setPassword: (value: string) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            登入您的帳戶
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  type="text"
                  value={account}
                  placeholder="帳號"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>
            </div>

            <div>
              {/* <div className="flex items-center justify-between">
        <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
               忘記密嗎？
              </a>
            </div>
          </div> */}
              <div className="mt-2">
                <input
                  type="password"
                  value={password}
                  placeholder="密碼"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">

                登入
              </button>
            </div>
            <Link to="/auth/register" className="mt-10 text-center text-sm/6 text-gray-500">
              還不是會員?{' '}
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                點此註冊
              </a>
            </Link >
          </form>
        </div>
      </div>
    </div>
  )

}
