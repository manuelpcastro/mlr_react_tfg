module.exports = (request, response, next) => {
  if (request.originalUrl.includes("login")) {
    response.json({ auth_token: "fe6e8276a92a52d788ed4caab8eb33506b581cda" })
  } else {
    next()
  }
}
