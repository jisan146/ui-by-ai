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

            return response.data;

        }
        catch (error) {

            console.error(error);

            return null;

        }

    }

}

export default new ValidationService();