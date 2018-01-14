function Car() {
	this.color = color
	this.doors = doors
	this.speed = speed
	this.defaultSpeed = defaultSpeed
	this.maxSpeed = maxSpeed
	this.seats = seats
	this.passengers = passengers[]

	this.put = function () {
		if (seats > passengers.length) {
			passengers.push(true)
			console.log("Теперь в машине " + passengers.length + " человек")
		}
		else {
			console.log("Недостатачно мест")
		}
	}

	this.land = function () {
		if (seats > 0) {
			passengers.shift()
			console.log("Теперь в машине " + passengers.length + " человек")
		}
		else {
			console.log("Из машины больше некого доставать")
		}
	}

	this.drive = function (newSpeed) {
		if (passangers.length >= 1) {
			speed = speed + newSpeed
			if (speed > maxSpeed) {
				speed = maxSpeed
			}
			console.log("Скорость машины стала " + speed)
		}
		else {
			console.log("А водить-то некому!")
		}

	}
}