# IEEE UC Club

Repository: [IEEE-UC/ieee-uc-edu-website](https://github.com/IEEE-UC/ieee-uc-edu-website)

## Editable Content

This project includes a folder named `editable-content` located in the `src` directory. This folder is designed to make the site easily customizable by nontechnical users. For example, the `officers` subfolder contains a `officers.json` file where you can define the details of officers, such as their name, role, image, quote, and description. These details are dynamically loaded into the site.

To learn more about how JSON works, you can refer to this [JSON tutorial](https://www.w3schools.com/js/js_json_intro.asp).

## Local Development

```
npm run dev
```

## Docker Containers

(first time only)

```
docker-compose build
```

<br>

always

```
docker-compose up
```

---

## Deployment (GitHub Pages)

This project is configured to deploy to GitHub Pages using the `gh-pages` branch. The Vite `base` option is set to `/ieee-uc-edu-website/` (the repository name). The build process copies all files from `/src/assets` and `/src/editable-content` into the deployed site, so all images and editable content are included.

### How GitHub Pages Works for This Repo

- The production site is built with `npm run build` (output in the `dist` folder).
- The `deploy` script publishes the `dist` folder to the `gh-pages` branch using the `gh-pages` npm package.
- GitHub Pages is configured (in the repo settings) to serve from the `gh-pages` branch (root).
- All asset and link paths are prefixed with `/ieee-uc-edu-website/` so the site works at `https://ieee-uc.github.io/ieee-uc-edu-website/`.
- All files in `/src/assets` and `/src/editable-content` are included in the deployed site.

### Deploy Steps

1. Commit and push all your changes to the main branch.
2. Run:
   ```
   npm run deploy
   ```
   This will build and publish the site to GitHub Pages.
3. Visit the site at: `https://ieee-uc.github.io/ieee-uc-edu-website/`

**Note:**

- If you change the repo name, update the `base` in `vite.config.js`.
- If you use custom domains, configure them in the repo settings and add a `CNAME` file to `public/`.
- If you want the site to appear at `https://ieee-uc.github.io/` (the root), you must use a repository named `ieee-uc.github.io` and set `base: '/'` in `vite.config.js`. This is a GitHub Pages restriction.
