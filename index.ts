import * as path from "path"
import {generateTheme, IColorSet} from "vscode-theme-generator"

const themeName = "Keizaal"

const colorSet: IColorSet = {
  base: {
    background: "#20232f",
    foreground: "#e5e9f9",
    color1: "#8489a3",
    color2: "#c6dcd8",
    color3: "#eed785",
    color4: "#a9c2df",
  },
  syntax: {
    boolean: "#e5e9f9",
    comment: "#5b6686",
    function: "#eed785",
    functionCall: "#eed785",
    identifier: "#a9c2df",
    number: "#c6dcd8",
    type: "#9ca49c",
  },
}

generateTheme(themeName, colorSet, path.join(__dirname, "theme.json"))
