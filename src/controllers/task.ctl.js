//4. pasamos el código de rutas a controladores, un controlador por cada ruta 

const getHome = (req, res) =>{
    res.json({message: "Esta en la ruta Home"})
}

const getContact = (req, res) =>{
    res.json({message: "Esta en la ruta Contact"});
}

const getProfile = (req, res) =>{
    res.json({message: "Esta en la ruta Profile"});
}

const getSignin = (req, res) =>{
    res.json({message: "Esta en la ruta Signin"});
}

const getSignup = (req, res) =>{
    res.json({message: "Esta en la ruta Signup"});
}

module.exports = {getHome, getContact, getProfile, getSignin, getSignup};
