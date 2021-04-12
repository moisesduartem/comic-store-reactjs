import { toast } from "react-toastify";

const configuration = {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

const error = message => toast.error(message, {
    position: "bottom-right",
    ...configuration,
});

const success = message => toast.success(message, {
    position: "bottom-right",
    ...configuration,
});


export const toasts = {
    error,
    success,
};