import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./github.slice";

// TODO: написать имя пользователя github
const user_nick = "";

export function GihubExplorer() {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.gihub);

  useEffect(() => {
    dispatch(fetchUser(user_nick));
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Загрузка ...</h1>
      </div>
    );
  }

  if (error && error.message) {
    alert(error.message);
  }

  return (
    <div>
      <h1>user: {user?.name}</h1>
      <h2>{user?.login}</h2>
      <img src={user?.avatar_url} alt="avatar" />
      <p> О себе: {user?.bio}</p>
      <ul></ul>
    </div>
  );
}
