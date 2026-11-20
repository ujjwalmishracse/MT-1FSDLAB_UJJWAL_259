//Create a counter using closers with increment, decrement, reset and getValue operations.























































































function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log("after increment:", count);
    }

    function decrement() {
        count--;
        console.log("After Decrement:", count);
    }

    function reset() {
        count = 0;
        console.log("Counter Reset:", count);
    }

    function getValue() {
        return count;
    }

    return {
        increment,
        decrement,
        reset,
        getValue
    };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

counter.decrement();

console.log("Current Value:", counter.getValue());

counter.reset();

console.log("Final Value:", counter.getValue());
