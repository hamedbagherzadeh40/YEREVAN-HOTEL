
# YERAVAN Maintenance Checklist

## 1. Visual Asset Troubleshooting
If images are not loading or cannot be replaced:
- [ ] **File Permissions**: Ensure `public/images` or upload directories are set to `755` (folders) and `644` (files).
- [ ] **Ownership**: Check if the web server (e.g., `www-data`) has ownership of the assets.
- [ ] **.htaccess**: Check for `RewriteRule` or `Header set Cache-Control` that might be caching old images or blocking hotlinking.
- [ ] **PHP Limits**: If uploading via CMS, ensure `upload_max_filesize` and `post_max_size` are > 20M in `php.ini`.
- [ ] **Memory Limit**: Ensure `memory_limit` is at least 256M for image processing libraries like GD or Imagick.

## 2. Branding Checklist
- [ ] Meta tags in `index.html` updated.
- [ ] `manifest.json` or `metadata.json` updated.
- [ ] Favicon replaced with YERAVAN logo.
- [ ] Email templates updated with YERAVAN footer.
