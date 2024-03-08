# Setup

- Download the code from the repository
- Unzip the folder
- Open the folder in to your VSCode
- In terminal type: `npm install`
- In terminal type: `npm run dev`

> Note: required NodeJS

## How to use

### Filter

- Data display: Click on the chart legend to toggle the displayed data <sup>[Legend Image](#ChartLegendImg)</sup>:
  - Click to close
  - Click again to open
- Date filter (on the slider, below the chart at the left side):
  - The left thumb indicates the "Starting" date of your filter
  - The right thumb indicates the "Ending" date of your filter
- Toggle table (on the button, below the chart at the right side):
  - Click to open
  - Click again to close

> Note: Table data can be filtered by clicking the chart legend

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

---

<a name="ChartLegendImg">Legend Image</a> ![Legend image](/public/chartLegend.png "Legends")
