export default {
  useNextSeoProps() {
    return {
      titleTemplate: "%s - DataNode",
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        property="og:title"
        content="Comprehensive BCA Study Notes | Academics - DataNode"
      />
      <meta
        property="og:description"
        content="Explore Datanode's BCA study notes for essential exam preparation. Find concise, easy-to-understand notes on key BCA subjects, exam-asked questions, and last-minute revision resources to help you excel."
      />
      <meta
        property="og:keywords"
        content="BCA notes, study material for BCA, BCA exam preparation, Datanode BCA resources, BCA subject notes, last-minute revision, exam questions, BCA study help"
      />
    </>
  ),
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
  docsRepositoryBase: "https://github.com/Ankit-2145/DataNode/tree/main",
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
  sidebar: {
    toggleButton: true,
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
  },
};
