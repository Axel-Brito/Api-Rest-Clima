const XLSX = require('xlsx');


function leerExcel(ruta){
    const workbook = XLSX.readFile(ruta);
    const workbookSheets = workbook.SheetNames;
    const sheet = workbookSheets[0];
    const dataExcel = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

    console.log(dataExcel);

}



leerExcel('C:\\Users\\crist\\Documents\\GitHub\\Api-Rest-Clima\\Excels\\Antofagasta_RR_1950_2005.xls');