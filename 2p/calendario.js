class Calendario {
    constructor(dia, mes, anio) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    printCalendar(mes, anio) {
        let dias = 0;
        let cont = 1;
        let inicioMes = 0;
        let calendar = new Array(5);
        for (let i = 0; i < 5; i++) {
            calendar[i] = new Array(7);
            for (let j = 0; j < 7; j++) {
                calendar[i][j] = 0;
            }
        }
        let x = this.firstDay(anio);
        if (this.isleapYear(anio)) {
            if (mes == 2) {
                dias = 29;
                inicioMes = (x + 31) % 7;
            }
        } else {
            switch (mes) {
                case 1:
                    dias = 31;
                    inicioMes = x;
                    break;
                case 2:
                    dias = 28;
                    inicioMes = (x + 31) % 7;
                    break;
                case 3:
                    dias = 31;
                    inicioMes = (x + 59) % 7;
                    break;
                case 4:
                    dias = 30;
                    inicioMes = (x + 90) % 7;
                    break;
                case 5:
                    dias = 31;
                    inicioMes = (x + 120) % 7;
                    break;
                case 6:
                    dias = 30;
                    inicioMes = (x + 151) % 7;
                    break;
                case 7:
                    dias = 31;
                    inicioMes = (x + 181) % 7;
                    break;
                case 8:
                    dias = 31;
                    inicioMes = (x + 212) % 7;
                    break;
                case 9:
                    dias = 30;
                    inicioMes = (x + 243) % 7;
                    break;
                case 10:
                    dias = 31;
                    inicioMes = (x + 273) % 7;
                    break;
                case 11:
                    dias = 30; //
                    inicioMes = (x + 304) % 7;
                    break;
                case 12:
                    dias = 31;
                    inicioMes = (x + 334) % 7;
                    break;
                default:
                    dias = "Error"
                    break;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                for (let j = inicioMes; j < 7; j++) {
                    calendar[i][j] = cont;
                    cont++
                }
            } else {
                for (let j = 0; j < 7; j++) {

                    if (cont <= dias) {
                        calendar[i][j] = cont;
                        cont++;
                    }
                }
            }

        }
        return calendar;


    }

    todayPlus(dia, num) {

        if (dia == "Lunes" || dia == "lunes") {
            num = num + 1;
        } else if (dia == "Martes" || dia == "martes") {
            num = num + 2;
        } else if (dia == "Miercoles" || dia == "miercoles") {
            num = num + 3;
        } else if (dia == "Jueves" || dia == "jueves") {
            num = num + 4;
        } else if (dia == "Viernes" || dia == "viernes") {
            num = num + 5;
        } else if (dia == "Sabado" || dia == "sabado") {
            num = num + 6;
        } else if (dia == "Domingo" || dia == "domingo") {
            num = num;
        }

        switch (num % 7) {
            case 0:
                this.num = 7;
                break;

            case 1:
                this.num = 1;
                break

            case 2:
                this.num = 2;
                break

            case 3:
                this.num = 3;
                break

            case 4:
                this.num = 4;
                break;

            case 5:
                this.num = 5;
                break;

            case 6:
                this.num = 6;
                break;

        }
        return this.num;
    }

    isleapYear(anio) {
        return ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) ? true : false;
    }

    //METODO EXTRA

    friday13(anio) {
        let count = 0;
        for (let month = 0; month < 12; month++) {
            let d = new Date(anio, month, 13);
            if (d.getDay() == 5) {
                count++;
            }
        }
        return count;
    }

    firstDay(y) {
        let x;
        x = (y + Math.floor((y - 1) / 4) - Math.floor((y - 1) / 100) + Math.floor((y - 1) / 400)) % 7;
        return x;
    }

}


nuevoDia = new Calendario();
console.log(nuevoDia.printCalendar(4, 2019));
console.log(nuevoDia.todayPlus("martes", 3));//5
console.log(nuevoDia.friday13(2015));//METODO EXTRA=5
console.log(nuevoDia.firstDay(2072));//3
console.log(nuevoDia.isleapYear(2010));//false