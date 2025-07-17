export const admin = {
  login: "@dmkwmwk",
  password: "**********",
};

export const superUser = {
  login: "@123123",
  password: "**********",
};

export const today = new Date().toDateString();

export function showMessage(messageText = "текст сообщения не передан") {
  console.log(messageText);
}
