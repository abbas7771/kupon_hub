# Deployment Guide - GitHub Pages

This guide walks you through deploying Kupon to GitHub Pages in 5 minutes.

## Prerequisites

- GitHub account
- Git installed locally
- Node.js 16+ installed

## Step 1: Prepare Your Repository

```bash
# Clone or create your GitHub repository
git clone https://github.com/YOUR_USERNAME/kupon-site.git
cd kupon-site

# Copy kupon-site-v2 files into the repo
cp -r kupon-site-v2/* .
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Build the Static Site

```bash
npm run export
```

This creates an `out/` directory with all static HTML files.

## Step 4: Create GitHub Pages Branch

```bash
# Create gh-pages branch from the out/ directory
git add out/
git commit -m "Deploy Kupon v1.0"

# Create the gh-pages branch
git branch -D gh-pages || true  # Delete if exists
git subtree push --prefix out origin gh-pages
```

**If subtree fails**, use this alternative:

```bash
# Manual branch creation
git checkout --orphan gh-pages
git rm -rf .
cp -r out/* .
git add .
git commit -m "Deploy Kupon v1.0"
git push origin gh-pages
git checkout main  # Switch back to main
```

## Step 5: Configure GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

GitHub will deploy your site. Wait 1-2 minutes for it to be live.

## Step 6: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/kupon-site/
```

Or if you have a custom domain configured:
```
https://yourdomain.com/
```

## Custom Domain Setup (Optional)

1. Add a `CNAME` file to the `out/` directory:
```bash
echo "yourdomain.com" > out/CNAME
```

2. Update your domain DNS settings to point to GitHub Pages:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records for GitHub Pages IPs

3. Rebuild and redeploy:
```bash
npm run export
git subtree push --prefix out origin gh-pages
```

## Automated Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run export
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

Now every push to `main` automatically deploys!

## Updating Content

### Update Coupons

Edit `pages/api/coupons.js` and add your coupons. Then rebuild:

```bash
npm run export
git add out/
git commit -m "Update coupons"
git subtree push --prefix out origin gh-pages
```

### Update Referral Programs

Edit `pages/referrals.js` with new programs. Then rebuild and deploy.

### Change Colors/Branding

Edit `tailwind.config.js` and `pages/*.js` files, then rebuild.

## Troubleshooting

### Site Not Showing

- Wait 2-3 minutes for GitHub to process
- Check GitHub Pages settings (Settings → Pages)
- Verify `gh-pages` branch exists and is not empty
- Clear your browser cache

### Links Broken

If deploying to a subfolder (not root), update `next.config.js`:

```javascript
const nextConfig = {
  basePath: '/kupon-site',  // Add this line
  assetPrefix: '/kupon-site',
  // ... rest of config
};
```

Then rebuild:
```bash
npm run export
git subtree push --prefix out origin gh-pages
```

### Custom Domain Not Working

- Check CNAME file exists in `out/CNAME`
- Verify DNS records are configured
- Wait 24 hours for DNS propagation
- Check GitHub Pages settings show your domain

### 404 on Refresh

GitHub Pages should automatically serve `404.html` for dynamic routes. Next.js exports do this automatically. If issues persist:

1. Create `out/404.html` with your index page
2. Or use GitHub's 404 page feature

## Performance Tips

- Compress images in `public/` folder
- Minimize CSS/JS (Next.js does this automatically)
- Use CDN for external resources
- Monitor with Lighthouse: `npm run build` then audit `/out`

## Maintenance

**Weekly:**
- Check coupon expiry dates
- Update expired coupons

**Monthly:**
- Review analytics
- Update featured programs
- Refresh stale content

**Quarterly:**
- Audit design/UX
- Test on new devices
- Update dependencies: `npm update`

## CI/CD Best Practices

1. **Commit Strategy**
   - Use meaningful commit messages
   - Tag releases: `git tag -a v1.0 -m "Release 1.0"`
   - Push tags: `git push origin --tags`

2. **Branch Strategy**
   - `main`: Production-ready code
   - `dev`: Development branch
   - `feature/*`: Feature branches
   - Keep `out/` generated, not committed

3. **Rollback**
   ```bash
   git log origin/gh-pages  # See previous deploys
   git checkout <COMMIT_HASH>:out/
   git subtree push --prefix out origin gh-pages
   ```

## Monitoring

Set up free monitoring:

- **Uptime**: StatusCake.com (free tier)
- **Analytics**: Google Analytics (add to `pages/_document.js`)
- **Performance**: WebPageTest.org

## Need Help?

- GitHub Pages Docs: https://pages.github.com/
- Next.js Export: https://nextjs.org/docs/advanced-features/static-html-export
- Tailwind CSS: https://tailwindcss.com/docs

---

Happy deploying! 🚀
