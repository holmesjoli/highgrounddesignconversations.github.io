# highgrounddesignconversations

## Making Updates to Participants Page

Updates to the Participants's Bio's, Locations, and Attendance. (Speakers, Speakers Emeritus, Associates, and Scholars) can all be made on the [main data](https://docs.google.com/spreadsheets/d/1qiS7xcxLwX8iwF9cs5CVKMKcJapze2UR382BO3-G82Q/edit?gid=0#gid=0).

Any updates made in the columns `City`, `State`, `Bio`, or attendance that matches the current year will automatically update on the website. The data is filtered by the current year, so to make any updates on who is attending or not, just update the attendance column. 

## Deploying react

https://medium.com/@madelinecorman/deploying-your-react-app-with-github-pages-and-adding-a-godaddy-custom-domain-name-50a99accd455

1. `npm run build`
2. `npm run deploy`

`gh-pages` branch is where the compiled and served code is stored.

## Bug in the Deployment Process

When you push the code it will take down the website, you just have to go and edit the HTML on the [`gh-pages` branch](https://github.com/holmesjoli/highgrounddesignconversations/blob/gh-pages/index.html).

The HTML will look something like this:
```
<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="icon" type="image/png" sizes="32x32" href="/highgrounddesignconversations/assets/Favicon.png"/><title>High Ground Design Conversations</title><script defer="defer" src="/highgrounddesignconversations/static/js/main.e8c59199.js"></script><link href="/highgrounddesignconversations/static/css/main.802b0025.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>
```

You need to remove the `/highgrounddesignconversations/` in three places: 

1. "/highgrounddesignconversations/assets/Favicon.png" should become "/assets/Favicon.png"
2. "/highgrounddesignconversations/static/js/main.e8c59199.js" should become "/static/js/main.e8c59199.js"
3. "/highgrounddesignconversations/static/css/main.802b0025.css" should become "/static/css/main.802b0025.css"

Then the HTML will look something like this:
```
<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="icon" type="image/png" sizes="32x32" href="/assets/Favicon.png"/><title>High Ground Design Conversations</title><script defer="defer" src="/static/js/main.e8c59199.js"></script><link href="/static/css/main.802b0025.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>
```
