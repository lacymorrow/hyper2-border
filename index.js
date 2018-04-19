const { getBorderColors } = require('./lib/colors')

exports.decorateConfig = config => {
  const defaultColors = ["#fc1da7", "#fba506"]

  const configObj = Object.assign(
    {
      borderWidth: "4px",
      borderColors: defaultColors,
    },
    config.hyperBorder
  );

  return Object.assign({}, config, {
    css: `
        ${config.css || ""}

        .hyper_main {
          --border-angle: 180deg;
          --border-width: ${configObj.borderWidth};
          --background-color: ${config.backgroundColor || "#000"};
          --border-color: ${config.borderColor};
          --border-colors: ${getBorderColors(configObj.borderColors).join(",")};
        }        
        .hyper_main {
          padding: var(--border-width);
          background: linear-gradient(var(--border-angle), var(--border-colors));;
        }
        .hyper_main .header_header {
          background-color: var(--background-color);
          top: var(--border-width);
          left: var(--border-width);
          right: var(--border-width);
        }
        .hyper_main .terms_terms {
          background-color: var(--background-color);
          left: var(--border-width);
          right: var(--border-width);
          bottom: var(--border-width);
        }

        .hyper_main .tabs_list {
          border-bottom-color: var(--border-color);
          border-top-left-radius: var(--border-width);
          border-top-right-radius: var(--border-width);
        }
        .hyper_main .tab_tab:last-child {
          border-top-right-radius: var(--border-width);
        }
        .hyper_main .terms_terms {
          border-radius: 0 0 var(--border-width) var(--border-width);
          bottom: var(--border-width);
          left: var(--border-width);
          right: var(--border-width);
        }
        .header_windowHeaderWithBorder {
          left: var(--border-width);
          width: calc(100% - var(--border-width) - var(--border-width));
        }
      `
  });
};
