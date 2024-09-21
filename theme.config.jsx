export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - DataNode",
    };
  },
  logo: <span>DataNode</span>,
  project: {
    link: "https://github.com/Ankit-2145/DataNode",
  },
  banner: {
    key: "3.0-release",
    text: (
      <a href="https://github.com/Ankit-2145/DataNode" target="_blank">
        🎉 Don't forget to give us a ⭐ on github →
      </a>
    ),
  },
  docsRepositoryBase: 'https://github.com/Ankit-2145/DataNode/tree/main',
  footer: {
    text: (
      <span>
        DataNode © {new Date().getFullYear()}{" "}
        <a href="https://sspinnacle.com" target="_blank">
         | Powered by Pinnacle Smart Solutions
        </a>
      </span>
    ),
  },
};
