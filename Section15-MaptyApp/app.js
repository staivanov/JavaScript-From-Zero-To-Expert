class App {
    #map;
    #mapEvent;

    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        //Using Geolocation API
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
            });
        }
    }

    _loadMap(position) {

        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const cooridantesMessage = `https://www.google.pt/maps/@${latitude}, ${longitude}`;
        console.log(cooridantesMessage);

        const coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        //Handling clicks on map.
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row-hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row-hidden');
    }

    _newWorkout(e) {
        e.preventDefault();

        inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = '';
        const { lat, lng } = this.#mapEvent.latlng;

        //Display marker
        L.marker([lat, lng])
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    maxWidth: 200,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-pop',
                }))
            .setPopupContent('Workout')
            .openPopup();
    }

}

