"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts);
		this.option("skip-install");
	}

	dir() {
		if (this.options.createDirectory !== undefined) {
			return true;
		}

		const prompt = [{
			type: "confirm",
			name: "createDirectory",
			message: "Would you like to create a new directory for your project?"
		}];

		return this.prompt(prompt).then(response => {
			this.options.createDirectory = response.createDirectory;
		});
	}

	dirname() {
		if (!this.options.createDirectory || this.options.dirname) {
			return true;
		}

		const prompt = [{
			type: "input",
			name: "dirname",
			message: "Enter directory name"
		}];

		return this.prompt(prompt).then(response => {
			this.options.dirname = response.dirname;
		});
	}

	writing() {
		// create directory
		if (this.options.createDirectory) {
			this.destinationRoot(this.options.dirname);
			this.appname = this.options.dirname;
		}

		this.fs.copy(this.templatePath(), this.destinationPath());

		this.fs.delete(this.destinationPath('editorconfig.txt'));
		this.fs.delete(this.destinationPath('gitignore.txt'));

		this.fs.copy(
			this.templatePath("editorconfig.txt"),
			this.destinationPath(".editorconfig")
		);

		this.fs.copy(
			this.templatePath("gitignore.txt"),
			this.destinationPath(".gitignore")
		);

	}

	install() {
		if (!this.options["skip-install"]) {
			this.installDependencies({
				npm: true,
				bower: false,
				yarn: false
			});
		}
	}
};
