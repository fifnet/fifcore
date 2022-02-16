const fs = require('fs-extra');
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
            const dbPath = path.join(__dirname, "../dbs/" + file + "/")
            console.log(pa)
            if (fs.existsSync(pa + '/meta.json')) {
                this.apps[file] = {
                    name: file,
                    path: pa,
                    meta: require(pa + '/meta.json'),
                    token: token
                }
                console.log(file, ":", token)
                //init dbs
                if (!fs.existsSync(dbPath) && fs.existsSync(pa + '/db_init/')) {
                    fs.copySync(pa + '/db_init/', dbPath, { recursive: true })
                }
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