import { Gender } from '@shared/types/enum/Gender';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterComponen({
  account,
  password,
  name,
  email,
  gender,
  birthday,
  setAccount,
  setPassword,
  setName,
  setEmail,
  setGender,
  setBirthday,
  onSubmit
}: {
  account: string;
  password: string;
  name: string;
  email: string;
  gender: string;
  birthday: string;
  setAccount: (value: string) => void;
  setPassword: (value: string) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setGender: (value: Gender) => void;
  setBirthday: (value: string) => void;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            註冊會員
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  type="text"
                  value={name}
                  placeholder="姓名"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  type="email"
                  value={email}
                  placeholder="信箱"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between gap-4">
                <label className="flex items-center w-1/2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 cursor-pointer hover:border-indigo-500 focus-within:outline-2 focus-within:outline-indigo-600 sm:text-sm/6">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value as Gender)}
                    className="mr-2 text-indigo-600 focus:ring-indigo-500"
                  />
                  男
                </label>

                <label className="flex items-center w-1/2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-base text-gray-900 cursor-pointer hover:border-indigo-500 focus-within:outline-2 focus-within:outline-indigo-600 sm:text-sm/6">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value as Gender)}
                    className="mr-2 text-indigo-600 focus:ring-indigo-500"
                  />
                  女
                </label>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  type="date"
                  value={birthday}
                  placeholder="生日"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
            </div>
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
                點此註冊
              </button>
            </div>
            <Link to="/auth/login" className="mt-10 text-center text-sm/6 text-gray-500">
              已有帳戶?{' '}
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                點此登入
              </a>
            </Link >
          </form>
        </div>
      </div>
    </div>
  )

}
