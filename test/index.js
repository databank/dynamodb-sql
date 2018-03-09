require('./lib/common')
if(global.awsdynamo){
    // require("./tests/030-insert.js")
    require("./tests/080-query.js")
}else{
    require("./tests/000-split_sql.js")
    require("./tests/010-createTable.js")
    require("./tests/020-showTables.js")
    require("./tests/030-insert.js")
    require("./tests/040-update.js")
    require("./tests/050-replace.js")
    require("./tests/060-delete.js")
    require("./tests/080-query.js")
    require("./tests/999-deleteTable.js")
}
