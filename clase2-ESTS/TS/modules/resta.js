var Resta = /** @class */ (function () {
    function Resta(num1, num2) {
        var _this = this;
        this.resultado = function () {
            return _this.num1 - _this.num2;
        };
        this.num1 = num1;
        this.num2 = num2;
    }
    return Resta;
}());
module.exports = Resta;
