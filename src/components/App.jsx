import "./App.css";
import Profile from "./Profile";
import Section from "./Section/Section";

const users = [
  {
    id: "user-fb1",
    name: "Олександр Коваленко",
    phone: "+380 67 123 45 67",
    email: "oleksandr.kov@example.com",
    status: "online",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "user-fb2",
    name: "Марія Петренко",
    phone: "+380 50 987 65 43",
    email: "mariya.p@testmail.com",
    status: "offline",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "user-fb3",
    name: "Дмитро Савченко",
    phone: "+380 93 456 78 90",
    email: "dima_sav@gmail.com",
    status: "online",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "user-fb4",
    name: "Олена Ткаченко",
    phone: "+380 66 321 09 87",
    email: "elena.tk@ukr.net",
    status: "offline",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: "user-fb5",
    name: "Ігор Рибак",
    phone: "+380 97 111 22 33",
    email: "igor_fish@outlook.com",
    status: "online",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: "user-fb6",
    name: "Анна Мельник",
    phone: "+380 63 555 44 22",
    email: "ann.melnik@example.com",
    status: "offline",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "user-fb7",
    name: "Андрій Шевченко",
    phone: "+380 95 777 88 99",
    email: "sheva7@test.com",
    status: "online",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: "user-fb8",
    name: "Вікторія Бойко",
    phone: "+380 68 444 00 11",
    email: "viki.boiko@ukr.net",
    status: "offline",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: "user-fb9",
    name: "Максим Лисенко",
    phone: "+380 50 222 33 44",
    email: "max_fox@gmail.com",
    status: "online",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: "user-fb10",
    name: "Юлія Кравченко",
    phone: "+380 73 888 99 00",
    email: "july.krav@example.com",
    status: "offline",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const App = () => {
  return (
    <div>
      <Section title="Profile list">
        {users.map((profile) => {
          return (
            <Profile
              key={profile.id}
              userId={profile.id}
              name={profile.name}
              phone={profile.phone}
              email={profile.email}
              v
              status={profile.status}
              avatar={profile.avatar}
            />
          );
        })}
      </Section>
    </div>
  );
};

export default App;
