# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Automatic Deployment
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will automatically deploy your site whenever you push to the `main` branch.

### 3. Manual Deployment (Alternative)
If you prefer manual deployment, you can use the npm script:

```bash
npm install
npm run deploy
```

This will:
1. Build the project using Vite
2. Deploy the `dist` folder to the `gh-pages` branch

## Configuration Details

### Vite Configuration
- **Base path**: Set to `/personal-portfolio/` for GitHub Pages
- **Build output**: `dist` directory
- **Assets**: Optimized for production

### SPA Routing Support
- Added `404.html` for GitHub Pages SPA routing
- Includes redirect script for proper client-side routing

### GitHub Actions Workflow
- Triggers on push to `main` branch
- Uses Node.js 18
- Installs dependencies with `npm ci`
- Builds the project
- Deploys to GitHub Pages using `peaceiris/actions-gh-pages`

## Accessing Your Site

Once deployed, your site will be available at:
`https://[your-username].github.io/personal-portfolio/`

## Troubleshooting

### Build Issues
- Ensure all dependencies are properly installed
- Check that the base path in `vite.config.ts` matches your repository name

### Routing Issues
- The 404.html file handles SPA routing for GitHub Pages
- If you have custom routes, ensure they're properly configured

### Deployment Issues
- Check GitHub Actions logs for build errors
- Ensure the repository has Pages enabled
- Verify the workflow file is in the correct location (`.github/workflows/`)
