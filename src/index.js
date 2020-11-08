import React from "react"; // 이 코드가 있어야 리액트가 JSX를 이해할 수 있다.
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root")); // App 컴포넌트가 id가 root인 엘리먼트에 그려진다.
// 리액트는 <App />과 같은 표시를 컴포넌트로 인식함
