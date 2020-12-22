const dogFactory = (name, breed, weight) => {
    return {
        _name: name, 
        _breed: breed,
        _weight: weight,
        get name() {
            return this._name
        },
        set name(nameIn) {
            this._name = nameIn
        },
        get breed() {
            return this._breed
        },
        set breed(breedIn) {
            this._breed = breedIn
        },
        get weight() {
            return this._weight
        },
        set weight(weightIn) {
            this._weight = weightIn
        },
        bark(){
            return 'ruff! ruff!';
        },
        eatTooManyTreats() {
            this._weight += 1
        }
    }
}