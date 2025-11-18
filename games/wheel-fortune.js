class WheelOfFortune {
    constructor() {
        this.prizes = [
            { type: "points", value: 10, text: "10 Points" },
            { type: "points", value: 25, text: "25 Points" },
            { type: "spin", value: 1, text: "Extra Spin" },
            { type: "badge", value: "lucky", text: "Lucky Badge" },
            { type: "points", value: 5, text: "5 Points" },
            { type: "video", value: "bonus", text: "Bonus Video" }
        ];
    }

    spin() {
        // Логика вращения колеса
    }

    awardPrize(prize) {
        // Выдача приза
    }
}
