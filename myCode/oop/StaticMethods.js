class StaticMethods {
    static func() {
        console.log('this is a static method');
    }

    static func2() {
        console.log('second static function');
    }

    regular() {
        console.log('instance function');
    }

}

StaticMethods.func();

const random = new StaticMethods();
random.regular();

StaticMethods.func2();