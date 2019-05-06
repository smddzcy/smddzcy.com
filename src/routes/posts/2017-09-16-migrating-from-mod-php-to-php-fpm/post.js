export default {
  title: 'Migrating from Apache/mod_php to Apache/php-fpm',
  tags: ['php', 'apache', 'mod_php', 'php-fpm', 'php7'],
  spoiler: 'Today is the day. After receiving tons of emails from Jetpack and seeing my server down countless times over the last couple of weeks, I finally made the switch from mod_php to php-fpm.',
  getContent: () => import('./document.mdx'),
};
