
                var test = new Date();
                test = test.getDate();
                var month = new Date();
                month = month.getMonth() +1;
                var daysQ;

                function daysInQuarantine(){
                if (month == 3) {
                    daysQ = Math.abs(test - 15)
                    console.log(daysQ);
                    return daysQ;
                } else if (month == 4) {
                    daysQ = Math.abs(test - 15) + 15; 
                    //return daysQ;
                } else if (month == 5) {
                    daysQ = Math.abs(test - 15) + 45; 
                    //return daysQ;
                } else if (month == 6) {
                    daysQ = Math.abs(test - 15) + 76; 
                    //return daysQ;
                }}; 
                function toPage(){
                    let qIDspot = document.getElementById("qID");
                    qIDspot.innerHTML += daysInQuarantine();
                }
                function toPageCat(){
                    let bitchCatspot = document.getElementById("bitchCat");
                    bitchCatspot.innerHTML += daysInQuarantine()*daysInQuarantine();
                }
                toPage();