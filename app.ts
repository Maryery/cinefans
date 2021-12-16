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
