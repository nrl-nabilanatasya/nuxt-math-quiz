<script setup lang="ts">
import { useQuizStore } from '~/stores/quizStore'

const router = useRouter()
const quizStore = useQuizStore()

// Score data
const score = computed(() => quizStore.calculateScore())
const totalQuestions = computed(() => quizStore.questions.length)
const percentage = computed(() => {
    const value = (score.value / totalQuestions.value) * 100
    return value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)
})

function playAgain() {
    // Logic to reset the quiz and navigate to the first question
    quizStore.resetQuiz()
    router.push('/')
}

function showLeaderboard() {
    // Logic to show the leaderboard
    router.push('/leaderboard')
}

// Save the score and timestamp when the component is mounted
onMounted(() => {
    quizStore.saveScore(score.value)
})
</script>
<template>
    <div class="page  z-10 px-4 sm:px-8 w-full">
        <div class="w-full max-w-2xl mx-auto text-left">
            <h1 class="text-4xl text-white mb-2 animate-fadeIn">Quiz completed</h1>
            <h1 class="text-4xl font-bold text-white mb-8 animate-fadeIn">You scored...</h1>
            <div class="bg-[rgb(60,77,103)] text-center text-white px-16 py-12 rounded-lg mb-8 animate-fadeIn">
                <h2 class="text-4xl mb-4">{{ percentage }}%</h2>
                <p class="text-2xl">{{ score }} out of {{ totalQuestions }}</p>
            </div>
            <button @click="playAgain" class="bg-purple-500 text-white mb-2 px-8 py-4 rounded-lg hover:bg-purple-700 w-full animate-fadeIn">Play Again</button>
            <button @click="showLeaderboard" class="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-700 w-full animate-fadeIn">Show Leaderboard</button>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.animate-fadeIn {
    animation: fadeIn 2s ease-in-out forwards;
}

.animate-fadeIn.delay-2s {
    animation-delay: 2s;
}
</style>