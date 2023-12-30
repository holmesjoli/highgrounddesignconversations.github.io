# highgrounddesignconversations

## Deploying react

https://medium.com/@madelinecorman/deploying-your-react-app-with-github-pages-and-adding-a-godaddy-custom-domain-name-50a99accd455

1. `npm run build`
2. `npm run deploy`
3. Edit the index.html file on the gh-pages branch by removing `/highgroundesignconversations` from the `href` attribute of the `link` tag and the `src` attribute of the `script` tag.

`gh-pages` branch is where the compiled and served code is stored.