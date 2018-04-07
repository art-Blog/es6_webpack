class kata {
    Do = function (data) {
        this.countM = 0
        this.countF = 0
        for (const num of data) {
            let number = parseInt(num, 10)
            if (number > 0) {
                this.countM++
            } else {
                this.countF += number
            }
        }
        return [this.countM, this.countF]
    }

    Show = (something) => {
        console.log(`User Input: ${something}`)
    }
}

module.exports = kata;