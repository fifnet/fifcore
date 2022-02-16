const Database = require('better-sqlite3')
const path = require("path")

class DB{
    constructor(app){
        this.appMgr = app
        this.dbs = {}
    }
    addDB(name){
        
    }
    runDB(appToken,filename,command,sql,para){
        const app = this.appMgr.getApp(appToken)
        if(!app)return null
        const dbpath = path.join(__dirname,"../dbs/"+app.name+"/"+filename)
        console.log(dbpath)
        const db = new Database(dbpath)
        const param = para ? para.split('|^|^') : []
        
        const fun = db.prepare(sql)

        if(command=='run'){
            return fun.run.apply(fun,param)
        }   
        if(command=='get'){
            return fun.get.apply(fun,param)
        }
        if(command=='all'){
            return fun.all.apply(fun,param)
        }
        return null
    }
}

module.exports = DB