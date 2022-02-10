const fs = require('fs')
const path = require("path")
class Apps {
    constructor() {
        this.apps = null
    }
    getApps() {
        if (this.apps) return this.apps
        this.apps = {}
        const folder = path.join(__dirname, "../apps/")
        fs.readdirSync(folder).forEach(file => {
            const token = Date.now()
            const pa = path.join(folder, file)
            if (fs.existsSync(path.join(pa, 'meta.json'))) {
                this.apps[file] = {
                    name: file,
                    path: pa,
                    meta: require(path.join(pa, 'meta.json')),
                    token: token
                }
                console.log(file,":",token)
            }
        });
        return this.apps
    }
    getApp(token) {
        for (const key in this.apps) {
            if (this.apps[key].token == token)
                return this.apps[key]
        }
        return null
    }
    getToken(name) {
        if (this.apps) {
            return this.apps[name]
        }
        return null
    }
}
module.exports = Apps