'use strict'

const table = document.querySelector('.table');
const header = document.querySelector('.table__header');

function getSort(table, numOfColumn) {
  const sortingRows = Array.from(table.rows).slice(1);
  let sortedRows = [];

  sortedRows = sortingRows.sort((rowA, rowB) => (rowA.cells[numOfColumn].innerHTML
        > rowB.cells[numOfColumn].innerHTML ? 1 : -1));

  table.tBodies[0].append(...sortedRows);
}

header.addEventListener('click', (e) => {
  const sortingColumn = +e.target.getAttribute('data');
  getSort(table, sortingColumn);
});
