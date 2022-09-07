// 쪼개진 파일에서 필요요하는 패키지나 라이브러리를 가져옴
const React = require('react'); //npm에서 쓰일 애들을 데리고 와야한다.
const {Component} = React;

class WordRelay extends Component {
    state = {
        text: 'hello, webpack',
    };

    render() {
        return <h1>{this.state.text}</h1>
    }
}

// 파일로 분리된 컴포넌트를 밖에서도 쓸 수 있게함
// client.jsx에서 불러올 수 있음
module.exports = WordRelay;