//primero confirmamos la edad de la persona

let birth = prompt('Ingrese su año de nacimiento: ');
let age = 2023 - birth;

let adult;
if (age >= 18) {
    adult = true;
} else {
    adult = false;
}
//en caso de que sea un adulto, puede continuar
if (adult) {
    alert('Podés continuar con la compra de gift cards.');
//en caso de que sea un menor, no puede
} else {
    alert('Lo sentimos, no podés continuar, solicitá a un mayor que realice la compra.');
}

//ahora procedo a mostrar las diferentes giftcards que se pueden ofrecer y declaro variables de las mismas
let fill;
let calc5 = (5 * 249) * 1.75;
let calc10 = (10 * 249) * 1.75;
let calc25 = (25 * 249) * 1.75;
let calc30 = (30 * 249) * 1.75;
let calc50 = (50 * 249) * 1.75;
let calc70 = (70 * 249) * 1.75;
let calc100 = (100 * 249) * 1.75;

while (adult) {
    fill = prompt('Ingresá el precio de la gift card que querés:\n\n- 5\n- 10\n- 25\n- 30\n- 50\n- 70\n- 100');
//en caso de ejecutar cualquiera de los comandos, diferentes bloques de código se van a ejecutar
    if (fill == 5) {
        let continuePurchase = confirm("El precio con impuestos es " + calc5 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {//en caso de confirmar, la alerta de éxito se muestra
            alert("Compra realizada con éxito");
        } else {//en caso de cancelar, vuelve al prompt
            alert("Selecciona otro precio.");
        }
    } else if (fill == 10) {
        let continuePurchase = confirm("El precio con impuestos es " + calc10 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {
            alert("Compra realizada con éxito");
        } else {
            alert("Selecciona otro precio.");
        }
    } else if (fill == 25) {
        let continuePurchase = confirm("El precio con impuestos es " + calc25 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {
            alert("Compra realizada con éxito");
        } else {
            alert("Selecciona otro precio.");
        }
    } else if (fill == 30) {
        let continuePurchase = confirm("El precio con impuestos es " + calc30 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {
            alert("Compra realizada con éxito");
        } else {
            alert("Selecciona otro precio.");
        }
    } else if (fill == 50) {
        let continuePurchase = confirm("El precio con impuestos es " + calc50 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {
            alert("Compra realizada con éxito");
        } else {
            alert("Selecciona otro precio.");
        }
    } else if (fill == 70) {
        let continuePurchase = confirm("El precio con impuestos es " + calc70 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {
            alert("Compra realizada con éxito");
        } else {
            alert("Selecciona otro precio.");
        }
    } else if (fill == 100) {
        let continuePurchase = confirm("El precio con impuestos es " + calc100 + ". ¿Deseas continuar con la compra?");
        if (continuePurchase) {
            alert("Compra realizada con éxito");
        } else {
            alert("Selecciona otro precio.");
        }
    }
}
