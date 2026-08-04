import ApiService from "./ApiService";

class FormSubmitService {

    async submit(url, formData) {

        try {

            const response = await ApiService.post(

                url,

                formData

            );

            return {

                success: true,

                data: response.data

            };

        }
        catch (error) {

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

            return {

                success: false,

                message: error.message

            };

        }

    }

}

export default new FormSubmitService();