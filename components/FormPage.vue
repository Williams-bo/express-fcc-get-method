<template>
    <Transition>
        <div v-show="modalState.showForm">
            <div class="w-screen bg-[#000000b5] z-[100] h-full fixed top-0 left-0 flex items-center justify-center">
                <div
                    class="modal overflow-scroll container-bg bg-white relative w-[90vw] xl:w-[70vw] h-[85vh] lg:h-[80vh] p-10 text-black">

                    <button @click="modalState.showForm = false" class=" text-right absolute p-4 top-0 right-0">
                        <img :src="close" alt="close icon">
                    </button>

                    <div class="text-left">
                        <h2 class="text-veryDarkBlue font-medium text-2xl lg:text-4xl">
                            {{ modalState.formTitle }}
                        </h2>
                        <p class="text-darkGrey text-base mt-2">
                            We want to hear from you. Let us know how we can help.
                        </p>
                    </div>
                    <form @submit.prevent="submitForm" class="flex flex-wrap gap-x-6 gap-y-8 mt-10">

                        <FormComponent labelText="Name" :require=true placeholder="e.g: Daniel James" name="name"
                            type="text" v-model="formResult.name" />
                        <FormComponent labelText="Email Address" :require=true placeholder="e.g: mailname@email.com"
                            name="email" type="email" v-model="formResult.email" />
                        <FormComponent labelText="Phone Number" :require=false placeholder="e.g: 0812 407 6934"
                            name="phone-number" type="number" v-model="formResult.phoneNumber" />
                        <FormComponent labelText="Preferable day of the week" :require=true placeholder="Select"
                            name="prefered-date" type="date" v-model="formResult.preferedDate" />
                        <FormComponent labelText="Preferable time" :require=true placeholder="Select" name="prefered-time"
                            type="time" v-model="formResult.preferedTime" />
                        <FormComponent labelText="Plot size interested in" :require=false placeholder="e.g: 600 SQM"
                            name="plot-size" type="text" v-model="formResult.plotSize" />
                        <div class="w-full">
                            <label for="">Message/Enquiry</label>
                            <textarea name="enquiry" v-model="formResult.message"
                                placeholder="e.g: Hello, I'm intested in the 400sqm package,  i'll like to make enquiries about..."
                                class="w-full bg-[#F7F7F7] mt-3 rounded-xl border-0 placeholder-gray-600 h-[20vh] lg:h-[10vh]
                                                          focus:placeholder-gray-500 focus:border focus:border-veryDarkBlue focus:ring-0 focus:outline-none">

                                            </textarea>
                        </div>

                        <button class="bg-veryDarkBlue text-white w-full lg:w-fit px-10 lg:px-20 py-4 rounded-xl">
                            Submit Details
                        </button>

                    </form>

                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import close from '../assets/images/icons/close.svg'

const modalState = useModalState()

const CREATE_FORM_REQUEST = gql`
  mutation CreateFormRequest($input: FormRequestInput!) {
    createFormRequest(input: $input) {
      id
      data
      title
    }
  }
`;

const formResult = ref({
    name: '',
    email: '',
    phoneNumber: '',
    preferedDate: '',
    preferedTime: '',
    plotSize: '',
    message: '',
})

// destructure useMutation composable to obtain mutate frunction and rename it to `addComment`
const { mutate: addFormRequest } = useMutation(CREATE_FORM_REQUEST, formResult.value );

const submitForm = async () => {
    // call addFormRequest function to add comment
    const { data } = await addFormRequest( {input: {data:formResult.value, title:"Book_Inspection_For_IRE"} } );

    modalState.value.showForm = false;
}

</script>

<style scoped>
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
        transform: translateY(-150vh);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>