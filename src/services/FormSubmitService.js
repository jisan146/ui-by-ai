import ApiService from "./ApiService";

class FormSubmitService {
    async submit(url, formData) {
        try {
            const response = await ApiService.post(url, formData);

            return {
                success: true,
                data: response.data
            };
        } catch (error) {

            // Validation Error (422)
            if (error.response?.status === 422) {
                const errors = {};

                Object.keys(error.response.data.errors).forEach((key) => {
                    errors[key] = error.response.data.errors[key][0];
                });

                return {
                    success: false,
                    errors
                };
            }

            // Internal Server Error (500)
            if (error.response?.status === 500) {
                return {
                    success: false,
                    message:
                        error.response.data?.message ||
                        "Internal Server Error. Please try again later."
                };
            }

            // Other HTTP Errors
            if (error.response) {
                return {
                    success: false,
                    message:
                        error.response.data?.message ||
                        `Request failed with status ${error.response.status}`
                };
            }

            // Network Error
            if (error.request) {
                return {
                    success: false,
                    message: "Network error. Please check your internet connection."
                };
            }

            // Unknown Error
            return {
                success: false,
                message: error.message || "Something went wrong."
            };
        }
    }
}

export default new FormSubmitService();