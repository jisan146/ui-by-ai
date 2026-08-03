class ValidationService {

    //--------------------------------------------------
    // Constructor
    //--------------------------------------------------

    constructor() {

        this.cache = {};

    }


    //--------------------------------------------------
    // Get Validation Schema
    //--------------------------------------------------

    async getSchema(formName) {

        // Return from cache

        if (this.cache[formName]) {

            return this.cache[formName];

        }

        try {

            //--------------------------------------------------
            // Development
            //--------------------------------------------------

            const module = await import(
                `../data/${formName}Validation.json`
            );

            this.cache[formName] = module.default;

            return module.default;


            //--------------------------------------------------
            // Production (Future)
            //--------------------------------------------------

            /*
            const response = await api.get(
                `/validation/${formName}`
            );

            this.cache[formName] = response.data;

            return response.data;
            */

        }
        catch (error) {

            console.error(
                `Validation schema '${formName}' not found.`,
                error
            );

            return null;

        }

    }


    //--------------------------------------------------
    // Clear Cache
    //--------------------------------------------------

    clearCache(formName = null) {

        if (formName) {

            delete this.cache[formName];

            return;

        }

        this.cache = {};

    }

}

export default new ValidationService();