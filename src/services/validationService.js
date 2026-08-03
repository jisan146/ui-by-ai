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

            const response = await fetch(

                `${this.baseUrl}/${formName}-form`,

                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    }
                }

            );

            if (!response.ok) {

                throw new Error(
                    `HTTP ${response.status}`
                );

            }

            return await response.json();

        }
        catch (error) {

            console.error(

                `Validation schema '${formName}' not found.`,

                error

            );

            return null;

        }

    }

}

export default new ValidationService();