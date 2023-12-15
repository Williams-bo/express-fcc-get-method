<template>
    <section class='container-bg m-3 bg-[#FDFAE3] py-10 px-6 xl:p-20'>

        <div class="flex justify-center items-center mt-10">
            <h2 class="text-3xl lg:text-5xl text-darkGrey lg:w-[70%]">
                This could be you too. Secure the future you want from today!
            </h2>
        </div>

        <div class="flex justify-center items-center flex-col space-x-3 mt-20 lg:flex-row lg:items-start">
            <div class="flex flex-col space-y-6 w-full md:w-1/3">
                <div class="flex justify-center items-center lg:min-h-[20vh] space-x-5 ">
                    <img :src="maleek" alt="maleek" class=" h-16 lg:h-20  rounded-full p-1" 
                        :class="(index === 0) ? 'active' : ''" />
                    <img :src="faith" alt="faith" class="lg:relative top-16 h-16 lg:h-20 rounded-full p-1" 
                        :class="(index === 1) ? 'active' : ''" />
                    <img :src="johnPaul" alt="johnPaul" class=" h-16 lg:h-20 rounded-full p-1"
                        :class="(index === 2) ? 'active' : ''" />
                    <img :src="akindele" alt="akindele" class="lg:relative top-16 h-16 lg:h-20 rounded-full p-1"
                        :class="(index === 3) ? 'active' : ''" /> 
                </div>
            </div>
            <div class="w-full lg:w-[45%] mt-10 lg:mt-0">

                <div class="min-h-[30vh] flex flex-col space-y-0 mt-8 md:pl-12 md:min-h-fit">
                    <p class="min-h-[10rem] text-darkGrey md:text-lg ">
                        {{ quotes[index].quote }}
                    </p>

                    <h4 class="text-2xl text-primaryPurple pt-4 pb-8">
                        {{ quotes[index].name }}
                    </h4>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import maleek from '../../assets/images/icons/maleek.svg'
import faith from '../../assets/images/icons/faith.svg'
import johnPaul from '../../assets/images/icons/johnPaul.svg'
import akindele from '../../assets/images/icons/akindele.svg'


let index = ref(0)
let restart = false
const quotes = ref([
    {
        name: 'Maleek, Lagos.',
        quote: `"I contacted the team about purchasing two plots and this turned out to be the most seamless real estate transaction
                 I've ever done. In less than a week, all the required documentation was done and I now have a piece of CHARIS VILLE!"`
    },
    {
        name: 'Faith, Ilorin',
        quote: `"The fact that I could spread my payment over 12 months was gold for me! 
                I am comfortably owning a land at my own pace.."`
    },
    {
        name: 'JohnPaul, Ontario',
        quote: `"Bought Charis Ville some months ago and I've not had any reason to fret even though I'm based outside the country.
                 It feels good to have an investment like this back home."`
    },
    {
        name: 'Mr. Akindele, Lagos.',
        quote: `"Charis Ville is real. I booked a site inspection and was taken to the inspection site. 
                There's a lot of possibilities there and the area is a dry land, very good for building. Thumbs-up to the team "`
    },
])


const changeSlide = () => {
    if (index.value === 3) {
        index.value = 0;
        restart = !restart
    } else {
        index.value++;
    }
}

const startSlide = () => {
    setInterval(changeSlide, 4000);
}

onMounted(() => {
    startSlide();
})

</script>

<style  scoped>
.active {
    animation: grow 4s linear 1 forwards;
}

@keyframes grow {

    0%,
    100% {
        transform: scale(1);
    }

    10%,
    90% {
        transform: scale(1.5);
    }

}
</style>
