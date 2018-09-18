const fs = require('fs');

module.exports = function() {
	//	process.stdout.write('prompt > ');

	process.stdin.on('data', (data) => {
		const cmd = data.toString().trim();
		if (cmd === 'ls') {
			fs.readdir('./', 'utf8', (err, files) => {
				if (err) {
					thow(err);
				} else {
					process.stdout.write(files.join('\n'));
					process.stdout.write('\nprompt > ');
				}
			});
		}
	});
};
