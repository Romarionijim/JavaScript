class Singelton2 {
    private static instance1: Singelton2;


    private constructor() {

    }


    public static getOneInstance(): Singelton2 {
        if (!Singelton2.instance1) {
            Singelton2.instance1 = new Singelton2();
        }
        return Singelton2.instance1;
    }
}

let instance1 = Singelton2.getOneInstance();


class demo {


}