const validate = (schema) => async (req, res, next) => {
    try {
        const parsebody = await schema.parseAsync(req.body);
        req.body = parsebody;
        next();
    } catch (err) {
        //res.status(400).json({msg : err.errors[0].message});

        const status = 422;
        const message = 'Fill all the required fields'
        //console.log(err)
        const details = err.errors[0].message;

        const error = {
            status, 
            message,
            details
        }

        next(error);
        
    }

}

module.exports = validate;