export function createUser(userData) {
    const serverURL = 'http://localhost:4000';
    return new Promise(async (resolve) => {
      const response = await fetch(`${serverURL}/api/v1/register`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      console.log("🚀 ~ file: authAPI.js:10 ~ returnnewPromise ~ data:::", data)
      resolve({ data });
    });
  }
  export function loginUser(loginInfo) {
    console.log("🚀 ~ file: authAPI.js:14 ~ loginUser ~ loginInfo:", loginInfo)
    const serverURL = 'http://localhost:4000';
    return new Promise(async (resolve) => {
      const response = await fetch(`${serverURL}/api/v1/login`, {
        method: 'POST',
        body: JSON.stringify(loginInfo),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }