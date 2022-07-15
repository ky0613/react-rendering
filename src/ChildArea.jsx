import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memoを使うことでpropsが変更されたときのみ再レンダリングする挙動になる
export const ChildArea = memo(({ open }) => {
  console.log("ChildAreaがレンダリングされた！！");
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
