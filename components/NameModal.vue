<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const name = ref('')
const emit = defineEmits(['submit', 'close'])

function submitName() {
    if (name.value.trim()) {
        // Emit the name to the parent component
        emit('submit', name.value)
    }
}

function closeModal() {
    emit('close')
}
</script>

<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-[rgb(60,77,103)] p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button @click="closeModal" class="absolute top-2 right-2 text-white bg-transparent hover:bg-[rgb(48,62,82)] rounded-full p-2">
                &times;
            </button>
            <h2 class="text-2xl font-bold text-white mb-4">Enter your name</h2>
            <input v-model="name" type="text" class="bg-[rgb(60,77,103)] text-white border border-[rgb(48,62,82)] p-2 rounded w-full mb-4" placeholder="Your name" />
            <div class="flex justify-end">
                <button @click="submitName" class="bg-purple-500 text-white px-4 py-2 w-full rounded hover:bg-purple-700">Submit</button>
            </div>
        </div>
    </div>
</template>