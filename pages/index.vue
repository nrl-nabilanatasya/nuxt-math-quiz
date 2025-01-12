<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/stores/quizStore'

const router = useRouter()
const showModal = ref(false)
const quizStore = useQuizStore()

function goToQuestions() {
    if (quizStore.name) {
        proceedToQuestions()
    } else {
        showModal.value = true
    }
}

function inputName(name: string) {
    quizStore.setName(name)
    showModal.value = false
    proceedToQuestions()
}

function proceedToQuestions() {
    const page = document.querySelector('.page')
    page!.classList.add('animate-slideLeft')
    setTimeout(() => {
        router.push('/question')
    }, 1000) // Match the duration of the slideLeft animation
}

function closeModal() {
    showModal.value = false
}
</script>
<template>
    <div class="page text-center z-10 px-4 sm:px-8">
        <h1 class="text-6xl font-bold text-white mb-8 animate-fadeIn">Welcome to the Math Quiz!</h1>
        <div class="bg-[rgb(60,77,103)] text-white text-2xl font-semibold py-2 px-4 rounded-lg mb-8 animate-fadeIn">
            Rounding Off to Nearest 10
        </div>
        <button @click="goToQuestions" class="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-700 opacity-0 animate-fadeIn delay-1s">Continue</button>
    </div>
    <NameModal v-if="showModal" @submit="inputName" @close="closeModal" />
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
.animate-fadeIn.delay-1s {
    animation-delay: 1s;
}

@keyframes slideLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-110%);
    }
}
.animate-slideLeft {
    animation: slideLeft 1s ease-in-out forwards;
}
</style>