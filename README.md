# Icon Generation toolkit

Script toolkit to convert SVG files to React components in bulk. All of this **SVGR** can do out of the box - but this is the workflow that I've used to speed things up.

## How to use

- `npm i -g svgr/cli@4.3.2` or `npx i svgr/cli@4.3.2`
- Go and download the excellent [Remix Icon](https://remixicon.com/) icon set
- Unzip the folder containing the SVG files (and sub folders) to `remix`
- Run `./convert ./remix ./components`

If you want to rename the generated files in bulk, I published a gist [here](https://gist.github.com/joduplessis/72cbd33619e8596aae7fc9efdaf13b25).
