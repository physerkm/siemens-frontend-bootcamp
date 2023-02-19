// High level modules should not depend on low level modules;
// both should depend on abstractions.
// High Level Module
var ProductService = /** @class */ (function () {
    function ProductService(productRepository) {
        this._productRepository = productRepository;
    }
    ProductService.prototype.Add = function (data) {
        this._productRepository.addToLog(data);
    };
    return ProductService;
}());
// Low Level Module
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
    }
    ProductRepository.prototype.addToLog = function (data) {
        console.log(data);
    };
    return ProductRepository;
}());
var ProductRepositoryWithOracle = /** @class */ (function () {
    function ProductRepositoryWithOracle() {
    }
    ProductRepositoryWithOracle.prototype.addToLog = function (data) {
        console.log("".concat(data, " (oracle)"));
    };
    return ProductRepositoryWithOracle;
}());
var productService = new ProductService(new ProductRepositoryWithOracle());
productService.Add("log 1");
