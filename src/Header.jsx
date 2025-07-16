import styles from "./Header.module.scss";

export function Header() {
  const sosials = [
    { title: "YouTube", link: "https://www.youtube.com" },
    { title: "Linkedin", link: "https://www.linkedin.com" },
    { title: "Instgram", link: "https://www.instagram.com" },
  ];

  return (
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"
        alt="logo"
        width={50}
        height={50}
      />
      <nav>
        {/* {sosials.map((item, index) => {
          return (
            <a key={index} href={item.link}>
              {item.title}
            </a>
          );
        })} */}

        {sosials.map((item, index) => (
          <a key={index} href={item.link}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
