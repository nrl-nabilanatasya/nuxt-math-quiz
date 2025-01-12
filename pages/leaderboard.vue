<script setup lang="ts">
import { useQuizStore } from '~/stores/quizStore'

const router = useRouter()
const quizStore = useQuizStore()

function backToHome() {
    // Logic to reset the quiz and navigate to the first question
    quizStore.resetQuiz()
    router.push('/')
}
</script>
<template>
    <div class="page z-10 px-4 sm:px-8 w-full">
        <div class="w-full max-w-2xl mx-auto text-left">
            <h1 class="text-4xl text-white mb-8 animate-fadeIn">Leaderboard</h1>
            <div class="bg-[rgb(60,77,103)] text-white px-8 py-4 rounded-lg mb-8 animate-fadeIn">
                <table class="w-full text-left">
                    <thead>
                        <tr>
                            <th class="py-2">Name</th>
                            <th class="py-2">Score</th>
                            <th class="py-2">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entry in quizStore.leaderboard" :key="entry.timestamp">
                            <td class="py-2">{{ entry.name }}</td>
                            <td class="py-2">{{ entry.score }}</td>
                            <td class="py-2">{{ entry.timestamp }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button @click="backToHome" class="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-700 w-full animate-fadeIn">Back to Home</button>
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