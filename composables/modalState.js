const formSettings = {
  showForm: false,
  formTitle: "Request a Call",
  showSuccessModal: false,
};

export const useModalState = () => useState("modal-state", () => formSettings);
