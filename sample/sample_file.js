function A(x) {
    this.x = x;
};

function B(x) {
    this.x = x;
};

function C(x) {
    this.x = x;
}

function ProvideA() {
    return new A(1);
}

function ProvideB(input){
    return new B(-input.x);
}

function ProvideC(input){
    if(input.x == 0) {
        throw new Error("input x is 0")
    }
    return new C(input.x);
}

module.exports = {
    ProvideA, 
    ProvideB,
    ProvideC
};