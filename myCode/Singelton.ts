class Singelton {
    private static instance: Singelton;


    private constructor() {
    }

    public static getInstance(): Singelton {
        if (!Singelton.instance) {
            Singelton.instance = new Singelton();
        }

        return Singelton.instance;
    }
}

let instance = Singelton.getInstance();
let instance2 = Singelton.getInstance();

const g = instance === instance2
console.log(g);
