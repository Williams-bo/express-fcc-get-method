<template>
    <Transition>
        <div v-show="modalState.showSuccessModal"
            class="w-screen bg-[#000000b5] z-[100] h-full fixed top-0 left-0 flex items-center justify-center">
            <div
                class="modal relative min-w-[15rem] h-fit py-10 px-4 bg-white text-black items-center justify-center space-y-5 rounded-xl flex flex-col">
                <button @click="closeSuccess" class="text-right absolute p-4 top-0 right-0">
                    <img :src="close" alt="close icon" class="h-8">
                </button>
                <img :src="joinedIcon" alt="joined Icon" class="h-12 w-fit">
                <div class=" text-center">
                    <h2 class="text-lg text-veryDarkBlue">Your request has  been <br> submitted</h2>
                    <small>Our team will be sure to reach out</small>

                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import close from '../assets/images/icons/close.svg'
import joinedIcon from '../assets/images/icons/joinedIcon.png'

const modalState = useModalState()

const closeSuccess = () => {
    modalState.value.showSuccessModal = false
}
</script>

<style  scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.modal {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
    animation: modal 1s ease 1 forwards;
}

@keyframes modal {
    from {
        transform: translateX(-150vh);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>