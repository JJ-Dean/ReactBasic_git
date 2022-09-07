//node 설정
const path = require('path');

module.exports = {
    name: 'wrodRelay-setting',
    mode: 'development', //실제 서비스에서는 production으로 바꾸기
    devtool: 'eval', //eval = 빠르게 하겠다.

    //entry의 확장자 적을 필요 없게 한다.
    resolve: {
        extensions: ['.js', 'jsx'],
    },

    entry: {
        //app: ['./client.jsx', './WordRelay.jsx']
        // './WordRelay.jsx' 를 이미 client.jsx에서 불러오고있기 때문에 쓸 필요없다.
        app: ['./client.jsx'],
    }, // 입력

    //entry 의 파일을 읽고 거기에 module을 적용한 후 output 에 뺀다.
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [ // babel의 옵션들
                    '@babel/preset-env', '@babel/preset-react'],
                },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
};