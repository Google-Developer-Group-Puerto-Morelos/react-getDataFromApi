const getData = (pageSize, state) => {
  return fetch(
    "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=" +
      pageSize +
      "&state=" +
      state
  ).then((resp) => resp.json());
};

export { getData };
