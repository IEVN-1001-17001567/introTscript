

//funciones

function sumar(a:number,b:number):number{
    return a+b;
}

const resultado=sumar(4,6);

console.log(resultado);

function multiplicar(n1:number, otronumero:number, base:number=3):number{
    let tem=n1*base;
    return tem;
}

console.log(multiplicar(3,5));

interface IMascota{
    nombre:string,
    edad:number,
    mostrarEdad:()=>void;
}

function calcular(mascota:IMascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:IMascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ', this.edad);
    },
}

calcular(nuevaMascota, 3);