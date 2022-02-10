/**
* This is the main Node.js server script for your project
* Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
*/

const path = require("path");
const fs = require('fs')
const axios = require('axios')
const fastifyStatic = require('fastify-static') 
require('dotenv').config()

const DB = require('./src/db.js')
const Apps = require('./src/apps')
let ServerURL = ""

const apps = new Apps
const db = new DB(apps,__dirname+"/dbs/")
// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false
});
const fileUpload = require('fastify-file-upload')

// ADD FAVORITES ARRAY VARIABLE FROM TODO HERE
fastify.register(require('fastify-cors'), { 
  // put your options here
})
// Setup our static files
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "apps/home"),
  prefix: "/" // optional: default '/'
});
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "public/util"),
  prefix: "/util/", // optional: default '/'
  decorateReply: false
});
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "public/accounts"),
  prefix: "/accounts/", // optional: default '/'
  decorateReply: false
});

for(const app in apps.getApps()){
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, "apps/"+app),
    prefix: "/"+app+"/", // optional: default '/',
    decorateReply: false
  });
}
// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));


fastify.register(fileUpload)

fastify.get('/install',(req,reply)=>{

})
fastify.get('/apps',(req,reply)=>{
  const res = apps.getApps()
  reply.send(res)
})
fastify.get('/nodes',(req,reply)=>{
  const res = [
    {endpoint:"https://api.nbdomain.com"},
    {endpoint:"https://tnode.nbdomain.com",selected:true},
    {endpoint:"https://api.nbdomain.com"},
  ]
  reply.send(res)
})
fastify.get('/rundb',(req,reply)=>{
  //console.log(req)
  const { token,filename,command,sql,para } = req.query
  console.log(req.query)
  const res = db.runDB(token,filename,command,sql,para)
  reply.send(res)
})
fastify.get('/getapi',(req,reply)=>{
  reply.send({API:"http://127.0.0.1:9001/api/"})
})
async function updateAccount(nbdomain){
  console.log("updating:",nbdomain)
  const nbnode = "https://api.nbdomain.com"
  const url = nbnode + "/api/q/_profile."+nbdomain
  const res = await axios.get(url)
  if(res&&res.data[0]&&res.data[0].obj&&res.data[0].obj.value&&res.data[0].obj.value.avatar){
    const folder = path.join(__dirname,"/public/accounts/"+nbdomain)
    fs.mkdirSync(folder, { recursive: true })
    const b64 = res.data[0].obj.value.avatar.split(',')[1]
    fs.writeFileSync(folder+"/avatar.png",Buffer.from(b64,'base64'))
  }
}
fastify.get('/updateInfo/:nbdomain',(req,reply)=>{
  const nbdomain = req.params['nbdomain']
  updateAccount(nbdomain)
  reply.send('ok')
})
fastify.get('/avatar/:nbdomain',(req,reply)=>{
  const nbdomain = req.params['nbdomain']
  const file = path.join(__dirname,"/public/accounts/"+nbdomain)+"/avatar.png"
  const exist = fs.existsSync(file)
  const url = ServerURL+"/accounts/"+nbdomain+"/avatar.png"
  const ret = {code:exist?0:1,url:exist?url:null}
  reply.send(ret)
})

fastify.post('/upload', function (req, reply) {
  // some code to handle file
  const files = req.raw.files
  console.log(files)
  let fileArr = []
  for(let key in files){
    fileArr.push({
      name: files[key].name,
      mimetype: files[key].mimetype
    })
  }
  reply.send(fileArr)
})


/**
* Our home page route
*
* Returns src/pages/index.hbs with data built into it
*/
fastify.get("/", function(request, reply) {
  reply.sendFile('index.html')
});
function writeServerURL(url){
  try{
    const buf = fs.readFileSync(__dirname+"/public/util/zzn.js")
    let data = buf.toString()
    data = data.replace('${SERVER_URL}',url)
    fs.writeFileSync(__dirname+"/public/util/zzn.js",data)
  }catch(e){
    console.error(e)
  }
}
// Run the server and report out to the logs
fastify.listen(process.env.PORT, function(err, address) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  ServerURL = address
  writeServerURL(address)
  console.log(`ZZnet is listening on ${address}`);
  fastify.log.info(`ZZnet is listening on ${address}`);
});
