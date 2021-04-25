export interface IRequestParameterValidationSchema {
    /**
     * indicates where is this parameter expected to be
     * example: query, body, params
     */
    in: string;
    /**
     * the name of the parameter to check
     */
    paramKey: string;
    /**
     * indicates whether this parameter is required in its place or not
     */
    required: boolean;
    /**
     * indicates the expected type for this parameter
     */
    type: string;
}

export function validateParams(requestParams: IRequestParameterValidationSchema[]) {
    return function (req, res, next) {
        for (let param of requestParams) {
            if (checkParamPresent(Object.keys(req[param.in]), param)) {
                let reqParam = req[param.in][param.paramKey];
                if (!checkParamType(reqParam, param)) {
                    return res.status(400).send({
                        message: `${param.paramKey} is of type ` +
                            `${typeof reqParam} but should be ${param.type}`
                    });
                }
            } else if (param.required) {
                return res.status(400).send({
                    message: `Missing Parameter ${param.paramKey}`
                });
            }
        }
        next();
    }
}

function checkParamPresent (reqParams, paramObj) {
    return (reqParams.includes(paramObj.paramKey));
};

function checkParamType (reqParam, paramObj) {
    const reqParamType = typeof reqParam;
    if (paramObj.type === 'int') {
        const integerValueOfRequestParam = Number(reqParam);
        if (isNaN(integerValueOfRequestParam)) {
            return false;
        }
        return true;
    }
    return reqParamType === paramObj.type;
};
