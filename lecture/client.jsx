const React = require('react');
const ReactDom = require('react-dom');

// class WordRelay extends React.Component {
//     state = {

//     };

//     render() {

//     }
// } => 다른 파일로 분리 (wrodRelay.jsx)

// 분리된 컴포넌트를 가져옴
const WordRelay = require('./WordRelay.jsx');


ReactDom.render(<WordRelay />, document.querySelector('#root'));
//ReactDOM.createRoot(document.querySelector('#root')).render(<WordRelay />);
//버전은 달라도 되는ㄴ듯