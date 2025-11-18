class ProgressManager {
    static updateProgress(lesson, score) {
        const progress = this.loadProgress();
        progress.completedLessons.push({
            lesson: lesson,
            score: score,
            date: new Date().toISOString()
        });
        this.saveProgress(progress);
    }

    static checkAchievements() {
        // Проверка и выдача достижений
    }
}
