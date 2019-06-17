module.exports = {
  apps : [{
    name: 'hexo',
    script: 'app.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
	watch: ["_post"],
    // Delay between restart
    watch_delay: 1000,
  }]
};
