var app = require('http')
var fs = require('fs')

var port = 3002

app.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Xử lý nếu req chỉ '/' thì load nội dung file index.html
    var req_url = (req.url == '/') ? '/index.html' : req.url

    // Lưu ý: sau khi res nội dung của index.html về client thì ở file HTML sẽ có những
    //       request yêu cầu load nội dung của Resource (cụ thể ở đây là file js/script.js và img/favicon.ico)
    //       nên function này sẽ được gọi lại (callback) nhiều lần (cụ thể coi log ở dòng code thứ 6)

    // Xử lý phần header res sẽ gửi về Client
    var file_extension = req.url.lastIndexOf('.');
    var header_type = (file_extension == -1 && req.url != '/')
                    ? 'text/plain'
                    : {
                        '/' : 'text/html',
                        '.html' : 'text/html',
                        '.ico' : 'image/x-icon',
                        '.jpg' : 'image/jpeg',
                        '.png' : 'image/png',
                        '.gif' : 'image/gif',
                        '.css' : 'text/css',
                        '.js' : 'text/javascript'
                        }[ req.url.substr(file_extension) ];

    // Đọc file theo req gửi từ Client lên (lưu ý, phần này sẽ được call nhiều lần để đọc các file Resource)
    fs.readFile( __dirname + req_url, (err, data)=>{
        if (err) {
            // Xử lý phần tìm không thấy resource ở Server
            console.log('==> Error: ' + err)
            console.log('==> Error 404: file not found ' + res.url)
            
            // Set Header của res thành 404 - Not found (thông báo lỗi hiển thị cho Client --> coi trong phần console của Browser nếu có lỗi)
            res.writeHead(404, 'Not found')
            res.end()
        } else {
            // Set Header cho res (phần header_type đã được xử lý tính toán ở dòng code thứ 16 và 17)
            res.setHeader('Content-type' , header_type);

            res.end(data);
            console.log( req.url, header_type );
        }
    })
}).listen(port, (err) => {
    if(err != null)
        console.log('==> Error: ' + err)
    else
        console.log('Server is starting at port ' + port)
})