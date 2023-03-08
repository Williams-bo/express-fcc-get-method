<template>
    <section class='container-bg m-3 bg-[#ECFAFE]'>
        <div class="flex flex-col items-center space-y-6 text-center py-20">
            <h2 class="text-3xl lg:text-5xl text-[#0B0728B2] mb-10">
                Frequently asked Questions
            </h2>
            <div class="container-bg bg-white w-[90%] md:w-[70%] p-10 lg:px-20">


                <FaqDropdown question="Where is IRE located?"
                    answer="Ire is a budding smart city located in the heart of Mowe, Ogun State." />
                <FaqDropdown question="What documents are available for me when I purchase?" 
                    answer="Upon initial deposit, you receive a Global C of O. You'll also get your receipts and sales contract." />
                <FaqDropdown question="Can I pay in installments?" 
                    answer="Yes! You can spread your payment over 3 months, 6 months or 12 months" />
                <FaqDropdown question="Can I survey the land?" 
                    answer="Definitely! Click 'book an inspection' and a member of our team would reach out to you to arrange one." />
            </div>

        </div>

    </section>
</template>

<script setup>

</script>

<style  scoped></style>