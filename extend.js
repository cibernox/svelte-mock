const svelteMock = require('./lib/index')
const extensions = require('./lib/expect')

global.svelteMock = svelteMock
expect.extend(extensions)
