import ApiService from "./ApiService";

class ValidationService {

    //--------------------------------------------------
    // Get Validation Schema
    //--------------------------------------------------

    async getSchema(formName) {

        try {

            const response = await ApiService.post(
                "/req/validation",
                { formName }
            );

            return {
                success: true,
                data: response.data
            };

        }
        catch (error) {

            const status = error.response?.status;

            switch (status) {

                case 400:
                    console.error("Bad Request:", error.response.data);
                    break;

                case 401:
                    console.error("Unauthorized. Please login again.");
                    break;

                case 403:
                    console.error("Forbidden. You don't have permission.");
                    break;

                case 404:
                    console.error("Validation endpoint not found.");
                    break;

                case 422:
                    console.error("Validation failed:", error.response.data);
                    break;

                case 500:
                    console.error("Internal Server Error.");
                    break;

                case 503:
                    console.error("Service Unavailable.");
                    break;

                default:
                    if (error.request) {
                        console.error("Network Error. Server did not respond.");
                    } else {
                        console.error("Unexpected Error:", error.message);
                    }

            }

            return {
                success: false,
                status: status || 0,
                message:
                    error.response?.data?.message ||
                    error.message ||
                    "Something went wrong."
            };

        }

    }

}

export default new ValidationService();