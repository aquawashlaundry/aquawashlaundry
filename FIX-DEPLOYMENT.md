# Fix for Blank Screen & MIME Type Error

## The Problem
You're seeing:
- Blank screen
- Error: "Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/jsx'"

This means GitHub Pages is serving the **source files** instead of the **built files**.

## The Solution

### Step 1: Check GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, make sure it says:
   - **Source**: `Deploy from a branch` → Select `gh-pages` branch and `/ (root)` folder
   - OR
   - **Source**: `GitHub Actions` (if using the workflow)

### Step 2: Use GitHub Actions (Recommended)

The workflow I created will automatically:
- Build your project
- Deploy only the `dist` folder
- Set correct MIME types

**To activate:**
1. Push the code:
   ```bash
   git add .
   git commit -m "Fix deployment configuration"
   git push
   ```

2. Go to **Settings** → **Pages**
3. Change **Source** to **GitHub Actions**
4. The workflow will run automatically

### Step 3: Manual Fix (If GitHub Actions doesn't work)

If you need to deploy manually:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Copy ONLY the dist folder contents:**
   - Go to the `dist` folder
   - Copy ALL files (index.html, assets/, .nojekyll, 404.html)
   - DO NOT copy src/, node_modules/, or any other folders

3. **Deploy to gh-pages branch:**
   ```bash
   # Create or switch to gh-pages branch
   git checkout --orphan gh-pages
   git rm -rf .
   
   # Copy dist contents to root
   cp -r dist/* .
   
   # Commit and push
   git add .
   git commit -m "Deploy built files"
   git push origin gh-pages --force
   ```

4. **Configure GitHub Pages:**
   - Go to **Settings** → **Pages**
   - **Source**: `gh-pages` branch, `/ (root)` folder

### Step 4: Verify Deployment

After deployment, check:
1. Visit your site: https://www.aquawashlaundry.in
2. Open browser console (F12)
3. Check Network tab - all files should load with correct MIME types:
   - `.js` files → `application/javascript`
   - `.css` files → `text/css`
   - `.html` files → `text/html`

### Important Notes:

❌ **DO NOT** deploy:
- `src/` folder
- `node_modules/` folder
- Root `index.html` (the source one)
- Any `.jsx` files

✅ **ONLY deploy:**
- Contents of `dist/` folder
- `dist/index.html` (the built one)
- `dist/assets/` folder
- `dist/.nojekyll` file

### Troubleshooting

If still not working:

1. **Clear browser cache** (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. **Check the deployed files:**
   - Visit: `https://www.aquawashlaundry.in/assets/index-*.js`
   - Should show JavaScript code, not JSX
3. **Verify index.html:**
   - Visit: `https://www.aquawashlaundry.in/index.html`
   - View source (Ctrl+U)
   - Should reference `/assets/index-*.js`, NOT `/src/main.jsx`

The key is: **Only the `dist` folder should be deployed, not the source files!**

