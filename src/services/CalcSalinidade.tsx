


export function CalcSalinidade(tempString:string , condString:string):number{
    //recebe os string e converte para float
    const tempFloat = parseFloat(tempString);
    const condFloat = parseFloat(condString);


    //constantes para o cálculo
    const a0:number=0.008 , a1:number=-0.1692, a2:number=25.3851,a3:number=14.0841, a4:number=-7.0261, a5:number=2.7081;
    const b0:number=0.0005, b1:number=-0.0056, b2:number=-0.0066, b3:number=-0.0375, b4:number=0.0636, b5:number=-0.0144;

    let deltaS:number;
    //const R: number= 26420;//representa a relação condutivvade padrão com a da amostra na temp 15C
    let R:number;


    //função globa IsNan - tentar converter e verifica se o valor e um numero se for is true
    if (isNaN(tempFloat) || isNaN(condFloat)){
        //se for verdade e qualquer uma delas nao for numero ou nao conseguir ser convertida, 
        throw new Error("Valores inválidos")
    }
    //caso passe por IsNan realiza a determinação do delta e depois o calculo de salinidade
    
        R=(condFloat/42914);

    deltaS = (((tempFloat-15)/(1+0.0162*(tempFloat-15)))*(b0 + (b1*R**(0.5)) + (b2*R) + (b3*R**(3/2)) + (b4*R**(2)) + (b5*R**(5/2))));

    const salinidade = a0 + a1*R**(1/2) + a2*R + a3*R**(3/2) + a4*R**(2) + a5*R**(5/2) + deltaS;

    return(


        parseFloat(salinidade.toFixed(2))


    );

} 