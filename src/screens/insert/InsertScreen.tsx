import { useContext, useState } from "react";
import { AppContext, IRegisterData } from "../../context/registered";
import styles from "./InsertScreen.module.css";

const InsertScreen = () => {
  const registeredData = useContext(AppContext);
  const [phone, setPhone] = useState("");
  const [age, setAgeState] = useState<number>(0);
  const [name, setNameState] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const form: any = document.querySelector("form");
    // console.log(form[0].value);
    registeredData.push({
      name: form[0].value,
      age: form[1].value,
      profession: form[2].value,
      email: form[3].value,
      phone: form[4].value,
      createdAt: form[5].value,
    });
    for (const element of form) {
      console.log(element.value);
      element.value = "";
    }
  };
  const getDate = () => {
    const today = new Date();
    var year = today.getFullYear();
    var month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    var day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
    const date = year + "-" + month + "-" + day;
    return date;
  };
  const [date, setDate] = useState(getDate());

  const setPhoneNumber = (phone: string) => {
    setPhone(
      phone
        .replace(/\D/g, "")
        .substring(0, 11)
        .replace(/(\d{2})(\d{1})(\d{4})(\d{3})/, "($1) $2 $3-$4")
      //fonte: https://mdbootstrap.com/snippets/jquery/mdbootstrap/939631#js-tab-view
    );
  };
  const setName = (text: string) => {
    setNameState(text.replace(/[^A-zÀ-ú ]/g, ""));

    //fonte: https://mdbootstrap.com/snippets/jquery/mdbootstrap/939631#js-tab-view
  };
  const setAge = (value: string) => {
    if (age! > 125) {
      setAgeState(125);
    }
    setAgeState(value as unknown as number);
  };
  return (
    <div className={styles.insertContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_line}>
          <label>
            Nome*:
            <input
              className={styles.name_input}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder={`Ex.: "Joaquim Ferreira Bolabotas"`}
            ></input>
          </label>
          <label>
            Idade*:
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              max={125}
              min={0}
              required
            ></input>
          </label>
        </div>
        <div className={styles.form_line}>
          <label>
            Profissão:
            <input
              type="text"
              name="profession"
              placeholder={`Ex.: "trabalhador"`}
            ></input>
          </label>
          <label>
            Email*:
            <input
              required
              className={styles.email_input}
              type="email"
              name="email"
              placeholder={`Ex.: "email@email.com"`}
            ></input>
          </label>
        </div>{" "}
        <div className={styles.form_line}>
          <label>
            Celular*:
            <input
              type="tel"
              name="phone"
              placeholder={"99 9 9999 9999"}
              value={phone}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </label>
          <label>
            Data de criação:{" "}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              // disabled
              // onChange={(e) => console.log(e.target.value)}
              name="createdAt"
            ></input>
          </label>
        </div>
        <div className={styles.footnote}>*Campos obrigatórios</div>
        <button type="submit">Teste</button>
      </form>
    </div>
  );
};

export default InsertScreen;
