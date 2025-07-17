import Btn, { Input } from "./Button";
import { Img } from "./ui/Image";
import { Video, video2_url } from "./ui/Video";
// import { Image } from "./ui/Image";
// import Image from "./ui/Image";
// import { Image } from "./ui/Image/Image";

export function App() {
  return (
    <div>
      App
      <Btn />
      <Input />
      {/* <Image /> */}
      <Img />
      <Video />
      <video width={300} src={video2_url} controls muted autoPlay loop></video>
    </div>
  );
}

// export default:
// - называть при import можем как мы хотим (нельзя использовать "as")
// - экспортируется только одно значение из модуля (файл)
// - используется когда модуль (файл) предосталяет основное значение (например компонент)
// - экспортировать используя default внутри одного файла мы можем только одно значение

// ------------------------------------------------------
// import {
//   today,
//   admin,
//   superUser,
//   showMessage as writeMessage,
// } from "./constants";

// export function App() {
//   return (
//     <div>
//       <button onClick={() => writeMessage(123)}>show message btn</button>
//       App
//       <h4>
//         Admin's cred: {admin.login}, {admin.password}
//       </h4>
//       <h5>
//         super user's cred: {superUser.login}, {superUser.password}
//       </h5>
//       <h6>today is: {today}</h6>
//     </div>
//   );
// }

// export
//  - экспоортировать несколько значений из одного файла
//  - при импорте нужно указывать точное имя импортируемого значение
//  - можно переименовать значение при импорте используя "as"
