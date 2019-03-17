createUser = function(name = 'не указано', work = 'не указано') {
    const createCar = function(item) {
        return item.car = 'Bentley'
    }
    let user = {
        name: name,
        work: work,
        lastname: `${name} ${work}`,
    }
    user.car = createCar(user)
    let hairColor = () => {
        let color = ['red', 'green', 'blue']
        let colorNumber = Math.random()
        if (colorNumber <= 0.33) {
            user.hairColor = color[0]
        } else if (colorNumber > 0.33 && colorNumber < 0.66){
            user.hairColor = color[1]
        } else {
            user.hairColor = color[2]
        }
    }
    hairColor()
    console.log(user)
}
createUser()