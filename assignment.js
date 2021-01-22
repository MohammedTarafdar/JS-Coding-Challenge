// GitHub url will here

//kilometerToMeter

function kilometerToMeter(kilo){

    if(kilo>=0){
        var meter = kilo * 1000;
        return meter;
    }
    else{
        console.log("Please give positive value for kilometer")
    }
    
}

var totalMeter = kilometerToMeter(2);
console.log(totalMeter);


//budgetCalculator

function budgetCalculator(watch, phone, laptop){
    
    var costOfWatch = watch * 50;
    var costOfPhone = phone * 100;
    var costOfLaptop = laptop *500;
    var totalBudget = costOfWatch + costOfPhone + costOfLaptop;
    return totalBudget;    
}
var expectedCost = budgetCalculator(1, 2, 3);
console.log(expectedCost);




// hotelCost

function hotelCost(day){
    if(day>=0){
        if(day <=10){
            cost = day*100;
        }
        else if(day<=20){
            var firstPart = 10*100;
            var remaining = day - 10;
            var secondPart =remaining * 80;
            var cost = firstPart + secondPart;
        }
        else if(day > 20){
            var firstPart = 10*100;
            var secondPart = 10*80;
            var remaining = day - 20;
            var thirdPart =remaining * 50;
            var cost = firstPart + secondPart + thirdPart;      
        }
        return cost;
    }
    else{
        console.log("Please give positive value for day.")
    }
    
    
}

var totalHotelCost = hotelCost(3);
console.log(totalHotelCost);


// megaFriend


function megaFriend(array) {
    var longName= '';
    for(var i=0; i<array.length; i++){
        var currentName = array[i];
        if(currentName.length> longName.length){
            longName = array[i];
        }
    }
    return longName;
}

var friends = ['Ashik', 'Tota', 'Moshfiqur', 'sohel', 'Rafiqul'];
var longestName = megaFriend(friends);
console.log(longestName);


