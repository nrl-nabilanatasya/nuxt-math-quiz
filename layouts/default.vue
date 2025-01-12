<script setup lang="ts">
</script>
<template>
    <NuxtRouteAnnouncer />
    <div class="min-h-screen flex flex-col justify-center bg-[rgb(49,62,81)] relative overflow-hidden">
        <div class="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] border-[50px] border-[rgb(45,57,73)] rounded-full"></div>
        <div class="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] border-[50px] border-[rgb(45,57,73)] rounded-full"></div>
        <div class="w-full flex justify-center">
            <NuxtPage />
        </div>
        <div class="absolute bottom-4 w-full text-center text-white opacity-30">
            &copy; Copyright : www.mathinenglish.com.
        </div>
    </div>
</template>