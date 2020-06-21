let http=require('http')
let child_process=require('child_process')
let server=http.createServer()

server.on(
    'request',
    function (req,resp) {
        console.log("接到一次推送")
        child_process.exec("./ci.sh",function (error,stdout,stderr) {
            console.log(stdout)
        })
        resp.end("resp..")
    }
    )
server.listen(
    8081,
    function () {
        console.log("持续集成服务已在8081端口启动")
    }
    )
