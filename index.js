'use strict';
var fs=require('fs');
var path = require('path');
// var PluginError = gutil.PluginError;
 const PLUGIN_NAME = 'gulp-fs';
function File(dirpath,dirname) {
    if(typeof dirname === "undefined"){
        if(fs.existsSync(dirpath)){
            return;
        }else{
            File(dirpath,path.dirname(dirpath));
        }
    }else{
        //判断第二个参数是否正常，避免调用时传入错误参数
        if(dirname !== path.dirname(dirpath)){
            File(dirpath);
            return;
        }
        if(fs.existsSync(dirname)){
            fs.mkdirSync(dirpath)
        }else{
            File(dirname,path.dirname(dirname));
            fs.mkdirSync(dirpath);
        }
    }
}




// 暴露（export）插件主函数
module.exports = File;
