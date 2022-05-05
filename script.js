const pidors = ['Саня', 'Сергуня', 'Дрон', 'Амел'];

function listPidors() {
  const idPidors = pidors.map((pidors, index) => ({
    name: pidors,
    id: index + 1,
  }));
  document.querySelector(
    '.table-of-pidors'
  ).innerHTML = `<table class="who-is-pidor"></table>`;
  const faggots = idPidors.map((el) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td coolspan = "1">${el.id} - ${el.name}</td>`;
    document.querySelector('.who-is-pidor').appendChild(row);
  });
}
listPidors();
function newPidor() {
  if (document.querySelector('.text-pidor').value !== '') {
    newP = document.querySelector('.text-pidor').value;
    pidors.push(newP);
    listPidors();
    return;
  } else {
    alert('Ну че ты! Добавь пидора!');
  }
}

const btnNewP = document.querySelector('.zhopa');

btnNewP.onclick = newPidor;
