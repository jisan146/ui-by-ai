import axios from "axios";

class ValidationService {

    //--------------------------------------------------
    // Constructor
    //--------------------------------------------------

    constructor() {

        this.baseUrl = "http://127.0.0.1:8000/api";

    }

    //--------------------------------------------------
    // Get Validation Schema
    //--------------------------------------------------

    async getSchema(formName) {

        try {

            const response = await axios.get(

                `${this.baseUrl}/${formName}-form`

            );

            return response.data;

        }
        catch (error) {

            console.error(error);

            return null;

        }

    }

    //--------------------------------------------------
    // Register
    //--------------------------------------------------

    async register(formData) {

        try {

            const response = await axios.post(

                `${this.baseUrl}/auth/register`,

                formData,

                {
                    headers: {

                        "Content-Type": "application/json",
                        "Accept": "application/json"

                    }
                }

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

                    errors[key] =
                        error.response.data.errors[key][0];

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

export default new ValidationService();