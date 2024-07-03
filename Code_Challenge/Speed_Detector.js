function carSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate how many km/h over the speed limit
        const kmOver = speed - speedLimit;
        
        // Calculate demerit points
        const demeritPoints = Math.floor(kmOver / kmPerDemeritPoint);
        
        console.log(`Demerit points: ${demeritPoints}`);
    }
}

// Example 
checkSpeed(80);  // Output: Demerit points: 2
checkSpeed(60);  // Output: Ok
checkSpeed(95);  // Output: Demerit points: 5
