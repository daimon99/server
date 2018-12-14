module.exports = {
	plugins: [
		'@babel/plugin-transform-arrow-functions'
	],
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: ['last 2 versions', 'ie >= 11']
				}
			}
		]
	]
}
