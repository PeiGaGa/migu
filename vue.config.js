var path = require('path');
module.exports = {
    devServer:{
        proxy:{
            '/product':{
                target:'http://www.migu.cn',
                chengeOrigin:true
            }
        }

    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "@common" : path.resolve(__dirname,"./src/common"),
                "@api":path.resolve(__dirname,"./src/api"),
                "@components" : path.resolve(__dirname,"./src/components"),
                "@utils":path.resolve(__dirname,"./src/utils"),
            }
        }
    }
}