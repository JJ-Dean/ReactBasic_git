const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState(''); //''=> 초기값
    const [result, setResult] = useState('');
    const inputRef = useRef(null); //hooks 에서는 useRef 로 dom 에 접근

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    const onSubmitForm = (e) => {
      e.preventDefault();
      if(parseInt(value) === first * second) {
        setResult('정답' + value);
        setFirst(Math.ceil(Math.random() * 9));
        setSecond(Math.ceil(Math.random() * 9));
        setValue('');
        inputRef.current.focus(); //useRef 로 dom 에 접근하려면 current 가 있어야한다.
      }else {
        setResult('땡');
        setValue('');
        this.input.focus();
        inputRef.current.focus();
      }
      
    }

    return (
      <>
      <div>{first}곱하기{second} 는?</div>  
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} onChange={onChangeInput} value={value} />
        <button id="button" className="abc" htmlFor="" >입력~</button>  
      </form>
      <div id="result">{result}</div>
    </>
    );
};

module.exports = GuGuDan;