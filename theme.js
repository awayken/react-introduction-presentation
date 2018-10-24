import { hack as theme } from 'mdx-deck/themes'
import prismStyle from "react-syntax-highlighter/styles/prism/atom-dark";

const reactTheme = {
  ...theme,
  prism: {
    style: prismStyle
  }
};

reactTheme.colors.background = "#20232a"
reactTheme.colors.codeBackground = "rgb(40, 44, 52)"
reactTheme.colors.heading = "rgb(97, 218, 251)"
reactTheme.colors.link = "rgb(97, 218, 251)"
reactTheme.colors.pre = "rgb(136, 198, 190)"
reactTheme.colors.preBackground = "rgb(40, 44, 52)"
reactTheme.colors.text = "#ffff"

reactTheme.css.fontWeight = 200

reactTheme.font = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"

export default reactTheme
