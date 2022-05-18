const pidors = ['Саня', 'Сергуня', 'Дрон', 'Амел'];
const idPidors = pidors.map((pidors, index) => ({
  name: pidors,
  id: index,
}));
const namePidor = document.querySelector('.text-pidor');
const btnNewP = document.querySelector('.zhopa');
const tablePidors = document.querySelector('.table-of-pidors');

const listPidors = (list) => {
  tablePidors.innerHTML = `<table class="who-is-pidor">${list.map(
    (el, index) =>
      `<tr><td class="name" id="${el.id}" colspan = "1">${index + 1} - ${
        el.name
      }</td><td class="input-edit" id="${el.id}" ><input id="input-${
        el.id
      }" value="${el.name}" type="text"/><button class="btn-ok" id="button-${
        el.id
      }">OK</button></td> <td><button class="edit-name" id="${
        el.id
      }">Редактировать</button></td><td><button class="del-name" id="${
        el.id
      }">Удалить Пидора</button></td></tr>`
  )}</table>`;
};

const newPidor = () => {
  console.log('add');
  if (namePidor.value !== '') {
    newP = namePidor.value;
    newId = { id: pidors.length, name: newP };
    pidors.push(newP);
    idPidors.push(newId);
    listPidors(idPidors);

    namePidor.value = '';
    btnNewP.disabled = true;

    return;
  } else {
    alert('Ну че ты! Добавь пидора!');
  }
};
const delPidor = (event) => {
  delName = 'del-name';
  if (event.target.className != delName) {
    return;
  }
  valuePidor = event.target.id;
  searchName = pidors[valuePidor];
  index = idPidors.findIndex((el) => el.name === searchName);
  idPidors.splice(index, 1);
  listPidors(idPidors);
};
const editPidor = (event) => {
  console.log(this, event.target.id); // смари - на что нажали, то и нажалось
  console.log('edit');
  itName = 'edit-name';
  if (event.target.className != itName) {
    return;
  }
  inputName = event.target.parentNode.parentNode.firstChild.nextSibling;
  inputName.classList = 'unshadow';
  event.target.parentNode.parentNode.firstChild.classList = 'display-none';

  const currentID = event.target.id;

  const input = tablePidors.querySelector(`#input-${currentID}`);
  const button = tablePidors.querySelector(`#button-${currentID}`);

  input.addEventListener(
    'keyup',
    (event) => (button.disabled = !event.target.value.length)
  );
};
const okPidor = (event) => {
  btnOk = 'btn-ok';

  if (event.target.className != btnOk) {
    return;
  }
  id = event.target.parentNode.id;
  searchName = pidors[id];
  index = idPidors.findIndex((el) => el.name === searchName);
  newName = inputName.firstChild.value;
  pidors[id] = newName;
  idPidors[index] = {
    name: newName,
    id: id,
  };
  listPidors(idPidors);
  console.log(id);
};

listPidors(idPidors);

tablePidors.addEventListener('click', delPidor);

[...document.querySelectorAll('.edit-name')].forEach((button) =>
  button.addEventListener('click', editPidor.bind(this))
);

tablePidors.addEventListener('click', okPidor);

namePidor.addEventListener('keyup', function (event) {
  btnNewP.disabled = !event.target.value.length;
});

btnNewP.addEventListener('click', newPidor);
