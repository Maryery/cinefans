interface Service {
	Renew(): void;
	Login(): void;
	Cancel(): void;
}

class NewFlix implements Service {
	Renew(): void {
		console.log('Renewing Newflix');
	}
	Login(): void {
		console.log('Login to Newflix');
	}
	Cancel(): void {
		console.log('Canceling Newflix');
	}
}

class CamaronPrime implements Service {
	Renew(): void {
		console.log('Renewing CamaronPrime');
	}
	Login(): void {
		console.log('Login to CamaronPrime');
	}
	Cancel(): void {
		console.log('Canceling CamaronPrime');
	}
}

class OBH implements Service {
	Renew(): void {
		console.log('Renewing OBH');
	}
	Login(): void {
		console.log('Login to OBH');
	}
	Cancel(): void {
		console.log('Canceling OBH');
	}
}

const button = document.getElementById('btn')!;
const service = <HTMLSelectElement>document.getElementById('service');
const task = <HTMLSelectElement>document.getElementById('task');

let selectedService: Service;

service.addEventListener('change', () => {
	switch(service.value){
		case '1': selectedService = new NewFlix();
			break;
		case '2': selectedService = new CamaronPrime();
			break;
		case '3': selectedService = new OBH();
			break;
	}
});
