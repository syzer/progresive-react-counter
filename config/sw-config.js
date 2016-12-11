module.exports = {
	cache: {
		cacheId: 'hello-electrode',
		runtimeCaching: [{
			handler: 'fastest',
			urlPattern: '\/$'
		}],
		staticFileGlobs: ['dist/**/*']
	},
	manifest: {
		background: '#FFFFFF',
		title: 'hello-electrode',
		short_name: 'PWA',
		theme_color: '#FFFFFF'
	}
}
