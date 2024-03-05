export const colors = {
  primary: "#467386",
  accent: "#D5A26A",
  warn: "#A7373F",
  white: "#fff",
  black: "#000",
  darkGrey: "#444",
  darkerGrey: "#222",
  lightGrey: "#bbb",
  lighterGrey: "#eee",
};

const themeColors = {
  dark: {
    background: colors.darkGrey,
  },
  light: {
    background: colors.white,
  },
};

export default () => {

    const scheme = useColorScheme();

    return {...colors , ...themeColors[scheme]};

}
