import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("watertests.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS wtests (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL , name TEXT, sex TEXT, age INTEGER,location TEXT, onchoImage TEXT, schistoImage TEXT, lfImage TEXT, helminthsImage TEXT);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertTests = (
  name,
  sex,
  age,
  location,
  onchoImage,
  schistoImage,
  lfImage,
  helminthsImage
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO wtests (name,sex,age,location,onchoImage,schistoImage,lfImage,helminthsImage) VALUES (?,?,?,?,?,?,?,?);`,
        [
          name,
          sex,
          age,
          location,
          onchoImage,
          schistoImage,
          lfImage,
          helminthsImage,
        ],
        (_, result) => {
          resolve(result);
          // console.log(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchTests = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM wtests ",
        [],
        (_, result) => {
          resolve(result);
          console.log(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const deleteTest = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM wtests`,
        [],
        (_, result) => {
          resolve(result);
          console.log(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
