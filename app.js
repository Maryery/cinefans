"use strict";
var NewFlix = /** @class */ (function () {
    function NewFlix() {
    }
    NewFlix.prototype.Renew = function () {
        console.log('Renewing Newflix');
    };
    NewFlix.prototype.Login = function () {
        console.log('Login to Newflix');
    };
    NewFlix.prototype.Cancel = function () {
        console.log('Canceling Newflix');
    };
    return NewFlix;
}());
var CamaronPrime = /** @class */ (function () {
    function CamaronPrime() {
    }
    CamaronPrime.prototype.Renew = function () {
        console.log('Renewing CamaronPrime');
    };
    CamaronPrime.prototype.Login = function () {
        console.log('Login to CamaronPrime');
    };
    CamaronPrime.prototype.Cancel = function () {
        console.log('Canceling CamaronPrime');
    };
    return CamaronPrime;
}());
var OBH = /** @class */ (function () {
    function OBH() {
    }
    OBH.prototype.Renew = function () {
        console.log('Renewing OBH');
    };
    OBH.prototype.Login = function () {
        console.log('Login to OBH');
    };
    OBH.prototype.Cancel = function () {
        console.log('Canceling OBH');
    };
    return OBH;
}());
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["Renew"] = 0] = "Renew";
    ServiceType[ServiceType["Login"] = 1] = "Login";
    ServiceType[ServiceType["Cancel"] = 2] = "Cancel";
})(ServiceType || (ServiceType = {}));
var button = document.getElementById('btn');
var service = document.getElementById('service');
var task = document.getElementById('task');
var selectedService;
var currentOperation;
service.addEventListener('change', function () {
    switch (service.value) {
        case '1':
            selectedService = new NewFlix();
            break;
        case '2':
            selectedService = new CamaronPrime();
            break;
        case '3':
            selectedService = new OBH();
            break;
    }
});
task.addEventListener('change', function () {
    switch (task.value) {
        case '1':
            currentOperation = ServiceType.Renew;
            break;
        case '2':
            currentOperation = ServiceType.Login;
            break;
        case '3':
            currentOperation = ServiceType.Cancel;
            break;
    }
});
button.addEventListener('click', function () {
    switch (currentOperation) {
        case ServiceType.Renew:
            selectedService.Renew();
            break;
        case ServiceType.Login:
            selectedService.Login();
            break;
        case ServiceType.Cancel:
            selectedService.Cancel();
            break;
    }
});
