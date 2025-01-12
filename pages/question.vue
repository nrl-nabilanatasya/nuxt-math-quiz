<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/stores/quizStore'

const quizStore = useQuizStore()
const router = useRouter()
const currentQuestionIndex = ref(0)

const currentQuestion = computed(() => quizStore.questions[currentQuestionIndex.value])
const selectedOption = ref(quizStore.selectedAnswers[currentQuestion.value.id] || '')

console.log(currentQuestion.value.id)
console.log(selectedOption.value)

function selectOption(option: any) {
    selectedOption.value = option
    quizStore.selectAnswer(currentQuestion.value.id, option)
}

function navigateToNextQuestion() {
    if (currentQuestionIndex.value < quizStore.questions.length - 1) {
        currentQuestionIndex.value++
        selectedOption.value = quizStore.selectedAnswers[quizStore.questions[currentQuestionIndex.value].id] || ''
    } else {
        submitQuiz()
    }
}

function submitQuiz() {
    router.push('/result')
}
</script>

<template>
    <div class="page grid grid-cols-1 md:grid-cols-2 gap-8 text-center z-10 sm:px-16 lg:px-32">
        <div class="text-left">
            <h2 class="text-xl font-semibold text-white mb-4 animate-fadeIn">Question {{ currentQuestion.id }} of {{ quizStore.questions.length }}</h2>
            <h1 class="text-3xl font-bold text-white mb-8 animate-fadeIn">{{ currentQuestion.question }}</h1>
        </div>
        <div class="flex flex-col items-center">
            <div class="flex flex-col items-stretch w-full">
                <div v-for="option in currentQuestion.options" :key="option" @click="selectOption(option)"
                    :class="['cursor-pointer flex items-center px-6 py-4 rounded-lg mb-4 animate-fadeIn', selectedOption.value === option ? 'bg-[rgb(102,128,165)] text-white' : 'bg-[rgb(60,77,103)] text-white hover:bg-[rgb(102,128,165)]']">
                    <div class="bg-[rgb(245,246,251)] text-[rgb(100,108,121)] rounded-md w-8 h-8 flex items-center justify-center mr-4">{{ option.charAt(0) }}</div>
                    <div>{{ option.slice(3) }}</div>
                </div>
            </div>
            <button v-if="currentQuestionIndex < quizStore.questions.length - 1" @click="navigateToNextQuestion" class="bg-purple-500 text-white px-6 py-4 rounded-lg hover:bg-purple-700 mt-2 w-full animate-fadeIn">Next</button>
            <button v-else @click="submitQuiz" class="bg-purple-500 text-white px-6 py-4 rounded-lg hover:bg-purple-700 mt-2 w-full animate-fadeIn">Submit</button>
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
</style>