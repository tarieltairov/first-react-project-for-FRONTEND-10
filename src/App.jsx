// Компонент
// 1) должны называться с заглавной
// 2) возвращают разметку
// 3) компонент не вызывается а используется после импорта как условно тег <App />
// 4) внутри компонета до return мы можем писать логику
// 5) хорошая практика называть компонент также как и файл внутри которого он лежит

import { Header } from "./Header";

// ------------------------------
// .jsx - объединение .js и .html

// import { Button } from "./Button";

// export function App() {
//   const today = new Date().toDateString();
//   console.log(today);

//   const sum = 15 + 5;
//   return (
//     // <>
//     //   <header>Header</header>
//     //   <main>Main</main>
//     //   <footer>footer</footer>
//     //   <Button />
//     //   <hr />
//     //   <Button />
//     // </>
//     <div>
//       дата: {today}, 15+5={sum}
//     </div>
//   );
// }
// ---------------------
// фрагменты
// export function App() {
//   return (
//     // <>
//     //   <h1>Заголовок</h1>
//     //   <p>параграф</p>
//     // </>

//     <div>
//       <h1>Заголовок</h1>
//       <p>параграф</p>
//     </div>
//   );
// }

//-----------------
// так встречается на практике - нежелательно
// function Header() {
//   return (
//     <header>
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"
//         alt="logo"
//         width={50}
//         height={50}
//       />
//       <nav>список для навигации</nav>
//     </header>
//   );
// }

export function App() {
  return (
    <div>
      <Header />
      app
    </div>
  );
}
