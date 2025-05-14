const TOKEN_KEY = 'token';


/**
 * 管理 token 的存取
 */
export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * 檢查 token 是否存在並且未過期
 */
export function isTokenValid(): boolean {
  const token = getToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;
    if (!exp) return false;

    const now = Math.floor(Date.now() / 1000);
    return exp > now;
  } catch (err) {
    console.warn('Invalid token format', err);
    return false;
  }
}
