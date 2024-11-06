class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration)

        this.cadence = cadence;
        this.calcPace();
    }


    calcPace() {
        this.pace = duration / this.distance;

        return this.pace;
    }
}