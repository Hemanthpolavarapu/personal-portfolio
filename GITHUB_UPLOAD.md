# Uploading Your Portfolio to GitHub

Follow these step-by-step instructions to upload your portfolio to GitHub and deploy it with GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account (create one at https://github.com/join if you don't have one already)
- Your portfolio code ready to be uploaded

## Step 1: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Name your repository: `personal-portfolio`
3. Leave it as a public repository
4. Do not initialize with a README, .gitignore, or license
5. Click "Create repository"

## Step 2: Prepare Your Local Repository

Open your terminal/command prompt in your portfolio directory and run these commands:

```bash
# Navigate to your portfolio root folder (if not already there)
cd C:\Users\Sanjay\Downloads\Portfolio

# Initialize a new Git repository
git init

# Add all files to be tracked
git add .

# Commit the files
git commit -m "Initial commit"

# Link to your GitHub repository
git remote add origin https://github.com/Hemanthpolavarapu/personal-portfolio.git

# Push your code to GitHub
git push -u origin master
```

## Step 3: Deploy to GitHub Pages

After uploading your code to GitHub, you can deploy using GitHub Pages:

```bash
# Navigate to the portfolio-app directory
cd portfolio-app

# Deploy the application
npm run deploy
```

This will:
1. Create a production build of your app
2. Push it to a branch called `gh-pages` in your repository

## Step 4: Configure GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Set the source to the `gh-pages` branch
5. Click "Save"

Your portfolio should now be available at: `https://hemanthpolavarapu.github.io/personal-portfolio`

## Troubleshooting

If you encounter any issues:

1. **Permission denied errors**: Make sure you have the correct GitHub credentials
2. **Deployment fails**: Check that you've installed gh-pages with `npm install --save-dev gh-pages`
3. **Page not displaying**: Wait a few minutes for GitHub to build your site, then refresh

## Updating Your Portfolio

Whenever you make changes to your portfolio:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

2. Push to GitHub:
   ```bash
   git push origin master
   ```

3. Deploy the updated version:
   ```bash
   npm run deploy
   ``` 