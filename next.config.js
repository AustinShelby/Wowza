module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de", "catchall"],
    defaultLocale: "catchall",
  },
  async redirects() {
    return [
      {
        source: "/catchall",
        destination: "/en",
        locale: false,
        permanent: false,
      },
      {
        source: "/catchall/:slug*",
        destination: "/en/:slug*",
        locale: false,
        permanent: false,
      },
    ];
  },
};
