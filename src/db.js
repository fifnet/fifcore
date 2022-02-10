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
        const db = new Database(path.join(app.path,"dbs/"+filename))
        const param = para ? para.split('|^|^') : []
        
        const fun = db.prepare(sql)
//        const res = fun.all.apply(fun,param)
//        console.log("runDB return:",res)
//        return res

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