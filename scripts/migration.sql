
-- YERAVAN Database Rebranding Script
-- Use this for WordPress or custom SQL databases to replace brand names safely.

-- Replace in Page/Post content
UPDATE wp_posts SET post_content = REPLACE(post_content, 'Naghli', 'YERAVAN');
UPDATE wp_posts SET post_title = REPLACE(post_title, 'Naghli', 'YERAVAN');

-- Replace in Options (Warning: Be careful with serialized data length)
-- For serialized data, it's safer to use a PHP search-and-replace tool like interconnect/it.
UPDATE wp_options SET option_value = REPLACE(option_value, 'Naghli', 'YERAVAN') WHERE option_name NOT LIKE '%_transient_%';

-- Replace in Meta data
UPDATE wp_postmeta SET meta_value = REPLACE(meta_value, 'Naghli', 'YERAVAN');

-- Verify
SELECT * FROM wp_posts WHERE post_content LIKE '%YERAVAN%' LIMIT 10;
