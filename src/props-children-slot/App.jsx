import Card from "./components/Card";
import CardWithControls from "./components/CardWithControls";
import { Greeting } from "./components/Greeting";
import { Layout } from "./components/Layout";
import Panel from "./components/Panel";
import { UserCard } from "./components/UserCard";

export default function App() {
  return (
    <div>
      {/* <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>

      <Layout>
        <Greeting name="Тони" age={20} />
        <Greeting name="Давран" age={19} />
      </Layout>

      <Layout>
        <h1>Добро пожаловать</h1>
      </Layout>

      <Layout>
        <img
          width={500}
          src="https://getintech.ca/wp-content/uploads/2024/09/1_jXusXvCfxECPU_Jh9S_E3w.jpg"
          alt="image-frontend"
        />
        <p>
          Frontend-разработчик отвечает за создание визуальной части сайта —
          всего, что видит и с чем взаимодействует пользователь. Он превращает
          макет дизайнера в живую веб-страницу с помощью HTML, CSS и JavaScript,
          а также реализует интерактивную логику. Освоить профессию можно без
          технического образования. Наша программа поможет вам шаг за шагом
          овладеть актуальными технологиями и получить востребованную
          специальность.
        </p>
      </Layout> */}

      {/* <UserCard
        name="Тариэл"
        age={24}
        avatar={
          "https://cdn3d.iconscout.com/3d/premium/thumb/boy-3d-icon-download-in-png-blend-fbx-gltf-file-formats--man-male-person-happy-people-human-avatar-pack-icons-7590859.png?f=webp"
        }
      /> */}

      {/* <Panel title={"Контактная форма"}>
        <p>Пожалуйста, заполните поля ниже</p>
        <input type="text" placeholder="Ваше имя" />
      </Panel>

      <Panel title={"Справочник о контактной форме"}>
        <p>Вам требуется заполнить поле с именем</p>
        <button>Я заполнил</button>
      </Panel>

      <Panel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          architecto pariatur, nostrum id alias voluptas perferendis dolorem
          quibusdam rerum odio?
        </p>
      </Panel> */}

      {/* <Card
        header={<h2>Спецпредложение</h2>}
        footer={<button> Заказать</button>}
      >
        <p>Пицца "Четыре сыра" по суперцене! Только сегодня</p>
      </Card> */}

      {/* <Card /> */}

      <CardWithControls
        title={"Пользователи"}
        isLoading={false}
        showRefresh={true}
        onRefresh={() => alert("обновление!")}
        header={<p style={{ color: "gray" }}>Последнее обновление: 19 июля</p>}
        footer={
          <button onClick={() => alert("идет запрос")}>Показать всех</button>
        }
        error={false}
        // error={true}
        // error
      >
        <ul>
          <li>Тони Старк</li>
          <li>Стив Роджерс</li>
          <li>Наташа Романофф</li>
        </ul>
      </CardWithControls>
    </div>
  );
}
