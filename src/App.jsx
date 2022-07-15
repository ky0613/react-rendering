import { useCallback, useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

// 再レンダリングが起きる条件
// stateが変更されたコンポーネントは再レンダリング
// propsが更新されたコンポーネントは再レンダリング(memoによる最適化)
// 再レンダリングされたコンポーネント配下の子要素は再レンダリング
export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChengeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);
  // アロー関数で書いたときはコンポーネントをmemo化しても新しい別の関数と認識されるので
  // propsの変更を感知して再レンダリングが起きる
  const onClickClose = useCallback(() => setOpen(false), []);
  return (
    <div className="App">
      <input type="text" onChange={onChengeText} value={text} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
