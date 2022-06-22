function countSundays(startYear, endYear,day){
    // This solution use Zeller's congruence algorithm based on Julian calendar
    let totalSunday = 0;

    // countSundayOfYear is a recursive function which takes a different year input(currentYear) in every recursion
    function countSundayOfYear(currentYear,endYear,day){
        if(currentYear > endYear){
            return;
        }
        //January and February consider the previous year of 13th and 14th month in Zeller's congruence algorithm 
        let months = [13,14,3,4,5,6,7,8,9,10,11,12]
        for(let i = 0; i< months.length; i++){
            let q = 1, 
                m = months[i],
                //K the year of the century (year mod 100).
                K = ( i === 0 || i === 1) ? Math.floor((currentYear - 1) % 100) : Math.floor(currentYear % 100),
                //J is the zero-based century(year/100)
                J = ( i === 0 || i === 1) ? Math.floor((currentYear - 1) / 100): Math.floor(currentYear / 100), 
                h;

            // Zeller's congruence
            h = Math.floor((q+ ((13*(m+1))/5) + K + (K/4) + 5 - J)%7);
            if(h === day){
                totalSunday++;
            }
        }
        countSundayOfYear(++currentYear, endYear,day);  
     }
    countSundayOfYear(startYear, endYear, day);
    return totalSunday;
 }
 
 
 console.log(countSundays(1901, 2000,1));
 //countSundays recieve 3 arguments (startYear, endYear, day)
 //0=saturday, 1=sunday, 2=monday, 3=tuesday, 4=wednesday, 5=thursday, 6=friday
 //By this solution possible to know any days count between two years.

 //Prove of solution :
 //This problem have in Project Euler list
 //Problem link -> https://projecteuler.net/problem=19
 //Go to this problem and check the answer, My solution answer is 171