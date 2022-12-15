import TypeTodo from "./script";

const tsTodo = new TypeTodo();
const addBtns = (<HTMLElement>document.getElementById('add'));

addBtns.addEventListener('click', function (event) {
	event.preventDefault();

	let taskText = (<HTMLInputElement>document.getElementById('task'));
	if (taskText.value != '') {
		tsTodo.addTask(taskText.value);
	}
	taskText.value = '';
});

class Developer {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return `The developer name is ${this.name} and is ${this.age} years old.`
    }
}

cosnt rafa = new Developer('Rafaela', 27);

console.log(rafa); // Developer {name: 'Rafaela', age: 27}
console.log(rafa.sayMyName()); // The developer name is Rafaela and is 27 years old.


class myDreamMotorcycle {
    _bikeName: string;
    _engineType: string;
    _engineCC: number;
    _itIsCool: boolean;
    constructor(
        bikeName: string,
        engineType: string,
        engineCC: number,
        itIsCool: boolean
    ) {
        this._bikeName = bikeName;
        this._engineType = engineType;
        this._engineCC = engineCC;
        this._itIsCool = itIsCool;
    }
    
    get bikeName() {
        return `The model of the motorbike is ${this._bikeName}`
    }
    set bikeName(bikeName) {
        this._bikeName = bikeName;
    }

    get engineCC() {
        return this._engineCC 
    }
    set engineCC(engineCC) {
        if(engineCC > 50) {
            this._engineCC = engineCC;
        } else {
            throw new Error('Bro, WTF?')
        }
    }

    accelerate(speed: number): string {
        return speed > 100 ? `Yeah, nice speed!` : `Too low, mite!`
    }

    turnDirection(direction: 'left' | 'right'):string {
        return direction === 'left' ? `Bend to left!` : `Turning right now!`
    }
	
    ableToWeelie(option: boolean): string {
    	return option === true ? 'If it be able to do this, of course is a nice bike!' : 'Sorry for you, man!'
    }
}


const xiste = new myDreamMotorcycle('XT1200', 'Bicilinder', 1200, true);
console.log(xiste.accelerate(190)); // 'Yeah, nice speed!'

const heritage = new  myDreamMotorcycle('Harley Heritage', 'Bicilinder', 1600, false);
console.log(heritage.turnDirection('right')); // Turning right now!

const ninja400 = new myDreamMotorcycle('Ninja 400', 'Bicilinder', 400, true);
console.log(ninja400.ableToWeelie(true)) // If it be able to do this, of course is a nice bike!

const intruder = new myDreamMotorcycle('Suzuki Intruder', 'Motocilinder', 125, false);
console.log(intruder.accelerate(90));  // Too low, mite!
