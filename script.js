// Инициализация игры
class EnglishFortuneGame {
    constructor() {
        this.userProgress = this.loadProgress();
        this.initEventListeners();
    }

    loadProgress() {
        return JSON.parse(localStorage.getItem('englishGameProgress')) || {
            points: 0,
            level: 1,
            spins: 0,
            lessonsCompleted: 0,
            availableSpins: 1,
            badges: ['beginner'],
            currentStreak: 0
        };
    }

    saveProgress() {
        localStorage.setItem('englishGameProgress', JSON.stringify(this.userProgress));
    }
}
