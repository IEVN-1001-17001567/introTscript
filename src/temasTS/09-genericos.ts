
class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
}
class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
}

let pila1=new PilaEnteros();
pila1.insertar(20);
pila1.insertar(23);
pila1.insertar(2);
console.log(pila1.extraer());

let pila2=new PilaString();
pila2.insertar('juan');
pila2.insertar('ana');
pila2.insertar('luis');
console.log(pila2.extraer());

//clase generica

class PilaGenerica<T>{ //La "T" transforma a la clase en generico
    private vec:T[]=[];
    insertar(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
}

let pila3=new PilaGenerica<number>;
pila3.insertar(20);
pila3.insertar(23);
pila3.insertar(2);
console.log(pila3.extraer());

let pila4=new PilaGenerica<string>;
pila4.insertar('juan');
pila4.insertar('ana');
pila4.insertar('luis');
console.log(pila4.extraer());