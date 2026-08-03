//--------------------------------------------------
// Validation Engine
//--------------------------------------------------

class Validation {

    //--------------------------------------------------
    // Validate Form
    //--------------------------------------------------

    validateForm(formData, schema, event = "submit") {

        const errors = {};

        if (!schema || !schema.fields) {
            return errors;
        }

        Object.keys(schema.fields).forEach((fieldName) => {

            const error = this.validateField(
                fieldName,
                formData[fieldName],
                formData,
                schema,
                event
            );

            if (error) {
                errors[fieldName] = error;
            }

        });

        return errors;

    }

    //--------------------------------------------------
    // Validate Single Field
    //--------------------------------------------------

    validateField(fieldName, value, formData, schema, event = "change") {

        const field = schema.fields[fieldName];

        if (!field) {
            return "";
        }

        if (
            field.validateOn &&
            !field.validateOn.includes(event)
        ) {
            return "";
        }

        const rules = field.rules || [];

        for (const rule of rules) {

            const error = this.runRule(
                rule,
                value,
                formData
            );

            if (error) {
                return error;
            }

        }

        return "";

    }

    //--------------------------------------------------
    // Run Rule
    //--------------------------------------------------

    runRule(rule, value, formData) {

        switch (rule.type) {

            case "required":

                if (
                    value === null ||
                    value === undefined ||
                    value === ""
                ) {
                    return rule.message;
                }

                break;

            case "requiredTrue":

                if (value !== true) {
                    return rule.message;
                }

                break;

            case "minLength":

                if (
                    value &&
                    value.length < rule.value
                ) {
                    return rule.message;
                }

                break;

            case "maxLength":

                if (
                    value &&
                    value.length > rule.value
                ) {
                    return rule.message;
                }

                break;

            case "email":

                if (
                    value &&
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ) {
                    return rule.message;
                }

                break;

            case "regex":

                if (
                    value &&
                    !(new RegExp(rule.pattern).test(value))
                ) {
                    return rule.message;
                }

                break;

            case "match":

                if (
                    value !== formData[rule.field]
                ) {
                    return rule.message;
                }

                break;
            case "passwordStrength":

                if (!value) {
                    break;
                }

                const upper =
                    (value.match(/[A-Z]/g) || []).length;

                const lower =
                    (value.match(/[a-z]/g) || []).length;

                const digit =
                    (value.match(/[0-9]/g) || []).length;

                const special =
                    (value.match(/[^A-Za-z0-9]/g) || []).length;

                if (
                    upper < (rule.minUpperCase || 1) ||
                    lower < (rule.minLowerCase || 1) ||
                    digit < (rule.minDigit || 1) ||
                    special < (rule.minSpecial || 1)
                ) {
                    return rule.message;
                }

                break;

            default:

                console.warn(
                    `Validation rule '${rule.type}' not implemented.`
                );

                break;

        }

        return "";

    }

    //--------------------------------------------------
    // Has Error
    //--------------------------------------------------

    hasErrors(errors) {

        return Object.keys(errors).length > 0;

    }

    //--------------------------------------------------
    // First Error Field
    //--------------------------------------------------

    getFirstError(errors) {

        const keys = Object.keys(errors);

        return keys.length ? keys[0] : null;

    }

    //--------------------------------------------------
    // Clear One Error
    //--------------------------------------------------

    clearFieldError(errors, fieldName) {

        const result = { ...errors };

        delete result[fieldName];

        return result;

    }

    //--------------------------------------------------
    // Clear All Errors
    //--------------------------------------------------

    clearErrors() {

        return {};

    }

}

export default new Validation();