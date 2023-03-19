<template>
    <section class='container-bg m-3 bg-[#ECFAFE]'>
        <div class="flex flex-col items-center space-y-6 text-center py-20">
            <h2 class="text-4xl lg:text-5xl text-[#0B0728B2] mb-10">
                Frequently asked Questions
            </h2>
            <div class="transition container-bg bg-white w-[90%] md:w-[70%] p-10 lg:px-20">
                <FaqDropdown question="Where is IRE located?"
                    answer="Ire is a budding smart city located in the heart of Mowe, Ogun State." />
                <FaqDropdown question="What documents are available for me when I purchase?"
                    answer="Upon initial deposit, you receive a Global C of O. You'll also get your receipts and sales contract." />
                <FaqDropdown question="Can I pay in installments?"
                    answer="Yes! You can spread your payment over 3 months, 6 months or 12 months" />
                <FaqDropdown question="Can I survey the land?"
                    answer="Definitely! Click 'book an inspection' and a member of our team would reach out to you to arrange one." />
                <div v-show="viewMore" class="transition">
                    <FaqDropdown question="How can I invest in Ire?"
                        answer="Simply fill the 'Request a Call' form and a member of our team would reach out to you with the necessary details." />
                    <FaqDropdown question="What plot sizes are available?"
                        answer="We have 300sqm, 450sqm and 600sqm available." />
                    <FaqDropdown question="What other payments are included asides the price of the land?"
                        answer="Developmental and documentation fee, and annual maintenance fees" />
                    <FaqDropdown question="Can I resell my property?"
                        answer="Yes, The subscriber who pays up on their land can resell their plot. However, the subscriber has to return all original documents and also come to the company with the new buyer to effect the 5% change of ownership." />
                    <FaqDropdown question="How can I make payment?">
                        <p class="">All payments would be made through Centenum. Kindly fill this
                            <button @click="setForm('Get Started')" class="underline">form</button> to begin.
                        </p>
                    </FaqDropdown>
                    <FaqDropdown question="Are there restrictions on building types?"
                        answer="No, however approvals are necessary before construction begins." />
                    <FaqDropdown question="Is it a dry land or swampy area?" 
                        answer="Ire is a dry land." />
                    <FaqDropdown question="What development will be done?"
                        answer="Perimeter Fencing, Gatehouse, Land Parcellation and Land clearing" />
                </div>
            </div>
            <div class="flex justify-end w-[90%] md:w-[70%] px-10 lg:px-20">
                <Button @click="viewMore = !viewMore" :text="viewMore ? 'View less' : 'View more →'"
                    design="btn-xl text-[#0B0728B2] text-xl md:text-2xl rounded-full" />
            </div>
        </div>

    </section>
</template>

<script setup>
const modalState = useModalState()

const formElement = '<button> xx </button>'


const setForm = (title) => {
    modalState.value.showForm = true
    modalState.value.formTitle = title
}

const viewMore = ref(false)
</script>

<style  scoped></style>