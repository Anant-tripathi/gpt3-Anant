# _GPT-3 project_

Source: [JavaScript Mastery's Youtube Video](https://www.youtube.com/watch?v=F627pKNUCVQ&t=5018s&ab_channel=JavaScriptMastery "Application One")

## Technologies

- React
- CSS
- Figma

## Development Setup

- Neovim
- Arch Linux Plasma
- Google chrome

## Features

- Browse different sections via internal links
- Beautiful UI/UX
- Responsive design for Desktops/Tablets/Mobiles

## The Process

During the development of this app, I used to watch this [video](https://www.youtube.com/watch?v=F627pKNUCVQ&t=11724s&ab_channel=JavaScriptMastery) by [JavaScript Mastery](https://www.youtube.com/@javascriptmastery). After each component I redid the entire component by memory and understand the concepts and techniques used to develop various parts of the site and approaching the problem at hand.

## What is Learned

1. _The BEM Naming Convention for HTML/CSS_

- Full for for **BEM** : Block, Element, Modifier
- **Blocks**: It is a standalone entity that is meaningful on its own. It's names consist of lowercase letters, digits and dashes. _Example:_ `.block`
- **Element**: An element that is semantically tied to the block and has no meaning independent of its containing block. Its names consist of lowecase letters, digits, dashes and underscores. The _CSS class_ for this is formed using the **Block name + two underscores + element name**. _Example_: `.block__element`
- **Modifier:** The element below the elements which act as final modifiers or flags for blocks and elements. These are used to _change appearance, behavior or state_. These names may consist of lowercase letters, digits, dashes and underscores. The _CSS class_ is formed using block's or element's name plus two dashes. Spaces in complicated modifiers are replaced by dash. _Example:_ `.block--mod` or `.block__element--modifier` or `.block--color-black`.

2. _The correct way to create a folder structure at the start of project_

- An assets folder under src
- An components folder under src
- - Folders for each component with its `jsx` and `CSS` files
- - under `/components` create an `import.js` which includes all the imports for and exports them as default with enables the programmer to import multiple components in a single line.
- Folders for each containers under `/src`
- - A container is a large _component_ which uses multiple components within it.
- Also add the `import.js` to assets and containers for easy import to other components which require it

## Overall growth

During this project, the most important thing I learnt was the BEM naming convention and the importance of making a good structure of files and components which , if done correctly, gives a head start to the project.
