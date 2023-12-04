
function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink ==='coffee'){
            resolve('coffee recived')
        }else{
            reject('order reject')
        }
    })
}


function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(`${order} is served`)
    })
}


// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder);
// }).catch(function(err){
//     console.log(err);
// })  // chaining a promise








// async await  : keywords

async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced);
    
        let proccesedOrder = await processOrder(orderPlaced)
        console.log(proccesedOrder);
    }catch(err){
        console.log(err);
    }
}

serveOrder()