'user strict'

var fs = require('fs')
const xml2js = require('xml2js')

var path = __dirname + '/../Method_03'

var danhSach_Tivi = []

//Get danh sách cửa hàng
var get_CuaHang = ()=>{
    var data = fs.readFileSync( path + '/Cua_hang/Cua_hang.xml', 'utf-8')
    return data
}

var get_DanhSach_Tivi = ()=>{
    fs.readdirSync(path + '/Tivi/').forEach(file => {
        var filePath = path + '/Tivi/' + file
        var data = fs.readFileSync(filePath, 'utf-8')

        var parser = new xml2js.Parser()
        parser.parseString(data, function (err, result) {
            danhSach_Tivi.push({'Tivi' : result.Tivi.$})
        })
    })
    console.log(danhSach_Tivi)

    var builder = new xml2js.Builder()
    var xml = builder.buildObject(danhSach_Tivi)

    return xml
}

module.exports = {
    get_CuaHang: get_CuaHang,
    get_DanhSach_Tivi: get_DanhSach_Tivi
}
