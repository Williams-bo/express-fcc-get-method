
const formSettings ={
    showForm: false,
    formTitle: 'Request a Call'
}

export const useModalState = () =>
  useState("modal-state", () => formSettings);