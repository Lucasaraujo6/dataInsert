import { useContext, useState } from "react";
import { AppContext } from "../../context/registered";
import styles from "./ViewScreen.module.css";

const ViewScreen = () => {
  const registeredData = useContext(AppContext);

  const [handleType, setHandleType] = useState("list");
  const [name, setNameState] = useState("");
  const setName = (text: string) => {
    setNameState(text.replace(/[^A-zÀ-ú ]/g, ""));
  };
  const addIds = () => {
    setHandleType("addIds");
    registeredData.forEach((register, index) => {
      register.id = index;
    });
  };
  let average: string = "(";
  let averageValue: number = 0;
  registeredData.forEach((register, index) => {
    average +=
      index < registeredData.length - 1
        ? ` ${register.age} +`
        : ` ${register.age}`;
    averageValue += register.age;
  });
  if (registeredData.length > 0) {
    average += ` ) / ${registeredData.length}= ${
      averageValue / registeredData.length
    }`;
  } else average = "Não há cadastraos";
  return (
    <div>
      <div className={styles.options}>
        <div
          className={[
            styles.option,
            handleType === "list" && styles.option_selected,
          ].join(" ")}
          onClick={() => setHandleType("list")}
        >
          Listar todos
        </div>
        <div
          className={[
            styles.option,
            handleType === "research" && styles.option_selected,
          ].join(" ")}
          onClick={() => setHandleType("research")}
        >
          Buscar
        </div>
        <div
          className={[
            styles.option,
            handleType === "firstName" && styles.option_selected,
          ].join(" ")}
          onClick={() => setHandleType("firstName")}
        >
          Primeiro nome
        </div>
        <div
          className={[
            styles.option,
            handleType === "addIds" && styles.option_selected,
          ].join(" ")}
          onClick={() => addIds()}
        >
          Adicionar ids
        </div>
        <div
          className={[
            styles.option,
            handleType === "licence" && styles.option_selected,
          ].join(" ")}
          onClick={() => setHandleType("licence")}
        >
          Podem tirar carteira
        </div>
        <div
          className={[
            styles.option,
            handleType === "average" && styles.option_selected,
          ].join(" ")}
          onClick={() => setHandleType("average")}
        >
          Média
        </div>
      </div>
      {handleType === "research" && (
        <div>
          <div className={styles.table_container}>
            <input
              className={styles.name_input}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              placeholder={`Ex.: "Joaquim Ferreira Bolabotas"`}
            ></input>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Profissão</th>
                  <th>Email</th>
                  <th>Celular</th>
                  <th>Data de criação</th>
                </tr>
              </thead>

              {registeredData &&
                registeredData.map(
                  (register, index) =>
                    register.name.includes(name) && (
                      <tbody key={index}>
                        <tr>
                          <td>{register.id}</td>
                          <td>{register.name}</td>
                          <td>{register.age}</td>
                          <td>{register.profession}</td>
                          <td>{register.email}</td>
                          <td>{register.phone}</td>
                          <td>{register.createdAt}</td>
                        </tr>
                      </tbody>
                    )
                )}
            </table>
          </div>
        </div>
      )}
      {handleType === "list" && (
        <div className={styles.table_container}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Profissão</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Data de criação</th>
              </tr>
            </thead>

            {registeredData &&
              registeredData.map((register, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{register.id}</td>
                    <td>{register.name}</td>
                    <td>{register.age}</td>
                    <td>{register.profession}</td>
                    <td>{register.email}</td>
                    <td>{register.phone}</td>
                    <td>{register.createdAt}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
      {handleType === "firstName" && (
        <div className={styles.table_container}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
              </tr>
            </thead>

            {registeredData &&
              registeredData.map((register, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{register.name.split(" ")[0]}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
      {handleType === "addIds" && registeredData.length > 0 ? (
        <h1>Ids adicionadas com sucesso!</h1>
      ) : (
        handleType === "addIds" && <h1>Ninguém cadastrado!</h1>
      )}
      {handleType === "licence" && (
        <div className={styles.table_container}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Profissão</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Data de criação</th>
              </tr>
            </thead>

            {registeredData &&
              registeredData.map(
                (register, index) =>
                  register.age >= 18 && (
                    <tbody key={index}>
                      <tr>
                        <td>{register.id}</td>
                        <td>{register.name}</td>
                        <td>{register.age}</td>
                        <td>{register.profession}</td>
                        <td>{register.email}</td>
                        <td>{register.phone}</td>
                        <td>{register.createdAt}</td>
                      </tr>
                    </tbody>
                  )
              )}
          </table>
        </div>
      )}
      {handleType === "average" && (
        <div className={styles.table_container}>
          {registeredData && <div>{average}</div>}
        </div>
      )}
    </div>
  );
};

export default ViewScreen;
