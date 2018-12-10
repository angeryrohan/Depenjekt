let { ProvideA, ProvideB, ProvideC } = require('./sample_file.js');
let depenjekt = require('../src/depenjekt');
let SuperSet = depenjekt.addDepenencies([{set: ProvideA, filePath: 'sample/sample_file.js'}, {set: ProvideB, filePath: 'sample/sample_file.js'}]);
let MegaSet = depenjekt.addDepenencies([SuperSet, {set: ProvideC, filePath: 'sample/sample_file.js' }]);
depenjekt.generate(MegaSet);