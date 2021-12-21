const path = require ("path")

const controller = {
    main: (req,res) => {
        const htmlPath = path.resolve (__dirname, "../views/home.html");
        return res.sendFile (htmlPath);
    },

    
    about: (req,res) => {
            const htmlPath = path.resolve (__dirname, "../views/about.html");
            return res.sendFile (htmlPath);
    },

}




module.exports = controller;