export const firstMid = (req, res, next) => {
    console.log("hello from middleware");
    next();
};