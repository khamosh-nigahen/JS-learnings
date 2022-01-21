/* example of closure with memory leak */

function func() {
    let counter = 0;
    let diffCounter = 0;
    function increment() {
        counter++;
        console.log(counter);
    }
    return increment;
}

const count = func();
count()
count()

/*In the above example u cannot access the diffCounter varibale as func() is only returning the increment function
and increment function is not using/refrencing the diffCounter,
JavaScript doent ships diffCounter in the backpack,
IF we would have shipped it that will be a memory leak as its a identifier will value but no one can acess it
*/