const selectOperation = document.querySelector('#operation-select');
const labelSymbol = document.querySelector('#symbol-operation');

const operationOptions = [
    {id: 'add',
     symbol: '+'
    }, 
    {id: 'sub',
     symbol: '-'
    },   
    {id: 'div',
     symbol: '/'
    }, 
    {id: 'mul',
     symbol: '*'
    }];

addEventListeners();

function addEventListeners(){
    selectOperation.addEventListener('change', operationChange);
}

function operationChange(e){
    let operationSelected = operationOptions.find(x => x.id === e.target.value);
    labelSymbol.textContent = operationSelected.symbol;
}