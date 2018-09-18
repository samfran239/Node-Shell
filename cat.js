const fs = require('fs');

module.exports = function() {
	process.stdin.on('data', (data) => {
		const cmd = data.toString().slice(0, 3);
		console.log('cmd', cmd);
		if (cmd === 'cat') {
			const fileName = data.toString().slice(3).trim();
			fs.readFile(`./${fileName}`, 'utf8', (err, files) => {
				if (err) {
					throw err;
				} else {
					process.stdout.write(files.join('\n'));
					process.stdout.write('\nprompt > ');
				}
			});
		}
	});
};
