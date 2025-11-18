// Данные урока Пеппы
const peppaLesson = {
    vocabulary: [
        { english: "Hello", kazakh: "Сәлем", audio: "hello.mp3" },
        { english: "Family", kazakh: "Отбасы", audio: "family.mp3" },
        { english: "Friend", kazakh: "Дос", audio: "friend.mp3" }
    ],
    games: [
        {
            type: "word-match",
            question: "Match words with pictures",
            pairs: [
                { word: "Hello", image: "hello.jpg" },
                { word: "Family", image: "family.jpg" }
            ]
        }
    ],
    quiz: [
        {
            question: "How do you say 'Сәлем' in English?",
            options: ["Hello", "Goodbye", "Thank you"],
            correct: 0
        }
    ]
};

function completePeppaLesson() {
    // Сохраняем прогресс
    const game = new EnglishFortuneGame();
    game.userProgress.lessonsCompleted++;
    game.userProgress.availableSpins++;
    game.userProgress.points += 50;
    game.saveProgress();
    
    // Возвращаем на главную
    window.location.href = 'index.html?lesson=peppa&completed=true';
}
