// path of template files
exports.path = './template'

// mili version should >= 3.5.0 and < 4.0.0
exports.engines = '>=3.5.0 <4.0.0'

exports.rules = [
  {
    path: 'src',
    upgrade: 'keep',
  },
  {
    path: 'tests',
    upgrade: 'keep',
  },
  {
    path: 'tests/tsconfig.json',
    upgrade: 'cover',
  },
  {
    path: 'src/utils/env.ts',
    upgrade: 'cover',
  },
  {
    path: 'package.json.mustache',
    upgrade: 'merge',
    handlers: ['mustache'],
  },
  {
    path: '.gitignore.mustache',
    upgrade: 'merge',
    handlers: ['mustache'],
  },
  {
    path: 'README.md.mustache',
    handlers: [
      core => core.extractArea('description', '<!-- description -->'),
      'mustache',
    ],
  },
]
