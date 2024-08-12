module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "ignacioevil@gmail.com",
        defaultReplyTo: "ignacioevil@gmail.com",
      },
    },
  },
});
