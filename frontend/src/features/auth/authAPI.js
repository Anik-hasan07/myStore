export function createUser(userData) {
    const serverURL = 'http://localhost:4000';
    return new Promise(async (resolve) => {
      const response = await fetch(`${serverURL}/api/v1/register`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      const data = await response.json();
      resolve({ data });
    });
  }