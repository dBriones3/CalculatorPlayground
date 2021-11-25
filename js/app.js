const selectOperation = document.querySelector('#operation-select');
const labelSymbol = document.querySelector('#symbol-operation');
const form = document.querySelector('#operation-form');

const operationOptions = [
    {id: 'add',
     symbol: '+',
     operationFunction: add,
    }, 
    {id: 'sub',
     symbol: '-',
     operationFunction: sub,     
    },   
    {id: 'div',
     symbol: '/',
     operationFunction: div,     
    }, 
    {id: 'mul',
     symbol: '*',
     operationFunction: mul,
    }];

addEventListeners();

function addEventListeners(){
    selectOperation.addEventListener('change', operationChange);
    form.addEventListener('submit', performOperation);
}

function operationChange(e){
    let operationSelected = operationOptions.find(x => x.id === e.target.value);
    labelSymbol.textContent = operationSelected.symbol;
}

function performOperation(e){
    e.preventDefault();
    
    const selectedOperation = selectOperation.value;
    console.log(selectedOperation);

    const firstNumberInput = document.querySelector('#first-number');
    const secondNumberInput = document.querySelector('#second-number');

    const operationChoice = operationOptions.find(x => x.id === selectedOperation);

    let result = operationChoice.operationFunction(firstNumberInput.value, secondNumberInput.value);

    showResult(result);
}

function showResult(result){
    let labelResult = document.querySelector('#result');

    labelResult.textContent = result;
}