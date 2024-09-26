export default function CircleInfo() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 py-10 md:px-24">
      <h1 className="text-4xl font-bold">Circle Information</h1>
      <ul>
        <li className="pb-3">
          <span className="pr-5">　　　　設立</span>
          <span>2023年10月</span>
        </li>
        <li className="pb-3">
          <span className="pr-5">　　　所在地</span>
          <span>第3クラブハウス207号室</span>
        </li>
        <li className="pb-3">
          <span className="pr-5">お問い合わせ</span>
          <span>ccc.aitech.jp@gmail.com</span>
        </li>
      </ul>
    </div>
  );
}
