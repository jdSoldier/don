let completeArr = JSON.parse(localStorage.getItem('a'))
let writeexcel = document.querySelector('.exportBtn') 

writeexcel.addEventListener('click', exportFile)

function buildTable(data){
    var table = document.querySelector('.table-body')

    data.forEach(element => {
        var row = `<tr>
            <td>${element.dni }</td>
            <td>${element.nombres}</td>
            <td>${element.apellidos}</td>
            <td>${element.tipo}</td>
            <td>${element.fecha}</td>
            <td>${element.hora}</td>
            </tr>`
        table.innerHTML += row
    });
}

buildTable(completeArr)

async function exportFile(workbook) {
    /* show Save As dialog */
    const result = await electron.dialog.showSaveDialog({
      title: 'Save file as',
      filters: [{
        name: "Spreadsheets",
        extensions: ["xlsx", "xls", "xlsb", /* ... other formats ... */]
      }]
    });
    /* write file */
    XLSX.writeFile(workbook, result.filePath);
  }
  



