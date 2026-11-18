const fs = require('fs')
const path = require('path')

const findConfig = (configDir, name) => {
    const jsonPath = path.join(configDir, `${name}.json`)
    if (fs.existsSync(jsonPath)) return { path: jsonPath, format: 'json' }

    const legacyPath = path.join(configDir, `${name}.config`)
    if (fs.existsSync(legacyPath)) return { path: legacyPath, format: 'legacy' }

    return null
}

module.exports = { findConfig }
