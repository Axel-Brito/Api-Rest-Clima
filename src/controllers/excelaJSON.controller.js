var XLSX = require("xlsx");

const ExcelaJSON = () => {
    const excel = XLSX.readFile(
        "C:\\Users\\crist\\Documents\\GitHub\\Api-Rest-Clima\\Excels\\Arica_TMax_1950_2005.xls"
    );
    var nombreHoja = excel.SheetNames; // regresa un array
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombreHoja[0]]);
    console.log(datos);

};

ExcelaJSON();