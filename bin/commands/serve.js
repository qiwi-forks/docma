"use strict";

// -------------------------
// Docma CLI `serve` command
// -------------------------

const path = require("path");
const { execSync } = require("child_process");

module.exports = function serve(dirname, config) {
    if (!config.quiet) {
        console.log(`Runs at port ${config.port}`);
    }

    let command = "node_modules/http-server/bin/http-server";

    return execSync(`node ${command} ./docs --port ${config.port}`);
};
