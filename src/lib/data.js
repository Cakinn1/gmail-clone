export const MOCK_DATA = [
  {
    id: 0,
    email: 'user@gmail.com',
    subject: 'this is a subject',
    message: "this is a message",
    date: "today"
  },
];

export const fetchDataWithTimeout = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 2000);
  })
}